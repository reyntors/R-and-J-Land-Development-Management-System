const Report = require('../models/reports.model');
const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

exports.generateReports = async (req, res, next) => {
    try {
        const { date } = req.params;

        const reports = await Report.findOne({ 'reports.date': date });

        if (!reports) {
            res.status(404).json({ message: 'No report found for this date' });
            return;
        }

        // Filter the reports array to include only reports with the specified date
        const filteredReports = reports.reports.filter((report) => report.date === date);

        if (filteredReports.length === 0) {
            res.status(404).json({ message: 'No reports found for the specified date' });
            return;
        }

        // Create an Excel workbook
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Reports');

        // Define worksheet columns
        worksheet.columns = [
            { header: 'Date', key: 'date', width: 12 },
            { header: 'Full Name', key: 'fullname', width: 20 },
            { header: 'Amount', key: 'amount', width: 15 },
            { header: 'Purpose', key: 'purpose', width: 25 },
        ];

        // Add data to the worksheet
        filteredReports.forEach((report) => {
            worksheet.addRow(report);
        });

       // Generate a unique filename for the Excel file
      
       const excelFilePath = path.join(__dirname, '../public/excels', `reports_${date}.xlsx`);

          // Save the Excel file to the "public/excels" directory
        await workbook.xlsx.writeFile(excelFilePath);

        


        res.status(200).json({ message: 'Daily reports generated successfully!',
                               filename: `reports_${date}.xlsx`, 
                               data: filteredReports,  });


    } catch (error) {
        return next(error);
    }
};

// API endpoint to retrieve the Excel file
exports.downloadExcelFile = (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(__dirname, '../public/excels/', filename);

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        res.status(404).json({ message: 'File not found' });
        return;
    }

     // Provide the file for download
     res.download(filePath, filename, (err) => {
        if (err) {
            res.status(500).json({ message: 'Error while downloading the file' });
        } else {
            // Delete the file after it has been downloaded
            fs.unlink(filePath, (unlinkError) => {
                if (unlinkError) {
                    console.error('Error while deleting the file:', unlinkError);
                } else {
                    console.log('File deleted:', filePath);
                }
            });
        }
    });
};





exports.generateCustomReports = async (req, res, next) => {
    try {
        const { startDate, endDate } = req.query; 
        
        // Find reports within the custom date range
        const reports = await Report.find({
            'reports.date': {
                $gte: startDate, // Greater than or equal to start date
                $lte: endDate,   // Less than or equal to end date
            },
        });

        if (!reports || reports.length === 0) {
            res.status(404).json({ message: 'No reports found for the specified date range' });
        } else {
            // Flatten the reports array and filter by date range
            const filteredReports = reports.reduce((accumulator, currentValue) => {
                accumulator.push(
                    ...currentValue.reports.filter(
                        (report) => report.date >= startDate && report.date <= endDate
                    )
                );
                return accumulator;
            }, []);


            // Create an Excel workbook
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Reports');

        // Define worksheet columns
        worksheet.columns = [
            { header: 'Date', key: 'date', width: 12 },
            { header: 'Full Name', key: 'fullname', width: 20 },
            { header: 'Amount', key: 'amount', width: 15 },
            { header: 'Purpose', key: 'purpose', width: 25 },
        ];

        // Add data to the worksheet
        filteredReports.forEach((report) => {
            worksheet.addRow(report);
        });

       // Generate a unique filename for the Excel file
       const excelFileName = `reports_${startDate}_${endDate}.xlsx`;
       const excelFilePath = path.join(__dirname, `../public/excels/`, excelFileName);

          // Save the Excel file to the "public/excels" directory
        await workbook.xlsx.writeFile(excelFilePath);

            return res
                .status(200)
                .json({ message: 'Reports for the specified date range',
                        filename: excelFileName,
                        data: filteredReports });
        }
    } catch (error) {
        return next(error);
    }
};


