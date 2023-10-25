const Report = require('../models/reports.model');
const moment = require('moment');
const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

exports.generateReports = async (req, res, next) => {
    try {
        const { date } = req.params;

        const selectedColumns = req.body.selectedColumns; 
        
        // Check if selectedColumns is provided
        if (!selectedColumns || !Array.isArray(selectedColumns) || selectedColumns.length === 0) {
            return res.status(400).json({ message: 'Invalid or missing selectedColumns' });
        }

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

        // Calculate the total amount
        const totalAmount = filteredReports.reduce((sum, report) => sum + report.amount, 0);

        // Create an Excel workbook
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Reports');

        // Define worksheet columns based on selected columns
        worksheet.columns = selectedColumns.map((columnKey) => ({
            header: columnKey.charAt(0).toUpperCase() + columnKey.slice(1),
            key: columnKey,
            width: 25,
        }));

        // Create a new array containing only the selected columns
        const selectedData = filteredReports.map((report) => {
            const rowData = {};
            selectedColumns.forEach((columnKey) => {
                rowData[columnKey] = report[columnKey];
            });
            worksheet.addRow(rowData);
            return rowData;
        });

        // Add a row for the total amount
        worksheet.addRow({ fullname: 'Total:', amount: totalAmount });

        // Generate a unique filename for the Excel file
        const excelFilePath = path.join(__dirname, `../public/templates/reports_${date}.xlsx`);

        // Save the Excel file to the "public/excels" directory
        await workbook.xlsx.writeFile(excelFilePath);

        res.status(200).json({
            message: 'Daily reports generated successfully!',
            filename: `reports_${date}.xlsx`,
            totalAmount: totalAmount,
            data: selectedData,
        });
    } catch (error) {
        return next(error);
    }
};


// API endpoint to retrieve the Excel file
exports.downloadExcelFile = (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(__dirname, '../public/templates/', filename);

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

        const selectedColumns = req.body.selectedColumns; 

        // Check if selectedColumns is provided
        if (!selectedColumns || !Array.isArray(selectedColumns) || selectedColumns.length === 0) {
           return res.status(400).json({ message: 'Invalid or missing selectedColumns' });
       }
        
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

          // Calculate the total amount
          const totalAmount = filteredReports.reduce((sum, report) => sum + report.amount, 0);



            // Create an Excel workbook
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Reports');

          // Define worksheet columns based on selected columns
          worksheet.columns = selectedColumns.map((columnKey) => ({
            header: columnKey.charAt(0).toUpperCase() + columnKey.slice(1),
            key: columnKey,
            width: 25,
        }));

         // Create a new array containing only the selected columns
         const selectedData = filteredReports.map((report) => {
            const rowData = {};
            selectedColumns.forEach((columnKey) => {
                rowData[columnKey] = report[columnKey];
            });
            worksheet.addRow(rowData);
            return rowData;
        });

          // Add a row for the total amount
          worksheet.addRow({ date: 'Total:', amount: totalAmount });

       // Generate a unique filename for the Excel file
       const excelFileName = `reports_${startDate}_${endDate}.xlsx`;
       const excelFilePath = path.join(__dirname, `../public/templates/`, excelFileName);

          // Save the Excel file to the "public/excels" directory
        await workbook.xlsx.writeFile(excelFilePath);

            return res
                .status(200)
                .json({ message: 'Reports for the specified date range',
                        filename: excelFileName,
                        totalAmount: totalAmount,
                        data: selectedData });
        }
    } catch (error) {
        return next(error);
    }
};


exports.generateWeeklyReports = async (req, res, next) => {
    try {
        // Get the current date
        const currentDate = moment();

        const selectedColumns = req.body.selectedColumns; 

         // Check if selectedColumns is provided
         if (!selectedColumns || !Array.isArray(selectedColumns) || selectedColumns.length === 0) {
            return res.status(400).json({ message: 'Invalid or missing selectedColumns' });
        }

        // Calculate the start date (most recent Sunday) and end date (following Saturday)
        const startDate = currentDate.clone().startOf('week');
        const endDate = currentDate.clone().endOf('week');

        // Format the dates as needed (e.g., to ISO format)
        const startDateFormatted = startDate.format('YYYY-MM-DD');
        const endDateFormatted = endDate.format('YYYY-MM-DD');
        // Find reports within the weekly date range
        const reports = await Report.find({
            'reports.date': {
                $gte: startDateFormatted,
                $lte: endDateFormatted,
            },
        });

        if (!reports || reports.length === 0) {
            res.status(404).json({ message: 'No reports found for the current week' });
        } else {
            // Flatten the reports array and filter by date range
            const filteredReports = reports.reduce((accumulator, currentValue) => {
                accumulator.push(
                    ...currentValue.reports.filter(
                        (report) =>
                            moment(report.date).isSameOrAfter(startDate) &&
                            moment(report.date).isSameOrBefore(endDate)
                    )
                );
                return accumulator;
            }, []);

            // Calculate the total amount
            const totalAmount = filteredReports.reduce((sum, report) => sum + report.amount, 0);

            // Create an Excel workbook
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Reports');

              // Define worksheet columns based on selected columns
              worksheet.columns = selectedColumns.map((columnKey) => ({
                header: columnKey.charAt(0).toUpperCase() + columnKey.slice(1),
                key: columnKey,
                width: 25,
            }));

           // Create a new array containing only the selected columns
            const selectedData = filteredReports.map((report) => {
                const rowData = {};
                selectedColumns.forEach((columnKey) => {
                    rowData[columnKey] = report[columnKey];
                });
                worksheet.addRow(rowData);
                return rowData;
            });

            // Add a row for the total amount
            worksheet.addRow({ date: 'Total:', amount: totalAmount });

            // Generate a unique filename for the Excel file
            const excelFileName = `reports_${startDateFormatted}_${endDateFormatted}.xlsx`;
            const excelFilePath = path.join(__dirname, `../public/templates/`, excelFileName);

            // Save the Excel file to the "public/excels" directory
            await workbook.xlsx.writeFile(excelFilePath);

            return res.status(200).json({
                message: 'Reports for the current week',
                filename: excelFileName,
                totalAmount: totalAmount,
                data: selectedData,
            });
        }
    } catch (error) {
        return next(error);
    }
};


exports.generateMonthlyReports = async (req, res, next) => {
    try {
        // Get the current date
        const currentDate = moment();

        const selectedColumns = req.body.selectedColumns; 

         // Check if selectedColumns is provided
         if (!selectedColumns || !Array.isArray(selectedColumns) || selectedColumns.length === 0) {
            return res.status(400).json({ message: 'Invalid or missing selectedColumns' });
        }

        // Calculate the start date (most recent Sunday) and end date (following Saturday)
        const startDate = currentDate.clone().startOf('month');
        const endDate = currentDate.clone().endOf('month');

        // Format the dates as needed (e.g., to ISO format)
        const startDateFormatted = startDate.format('YYYY-MM-DD');
        const endDateFormatted = endDate.format('YYYY-MM-DD');
        // Find reports within the weekly date range
        const reports = await Report.find({
            'reports.date': {
                $gte: startDateFormatted,
                $lte: endDateFormatted,
            },
        });

        if (!reports || reports.length === 0) {
            res.status(404).json({ message: 'No reports found for the current week' });
        } else {
            // Flatten the reports array and filter by date range
            const filteredReports = reports.reduce((accumulator, currentValue) => {
                accumulator.push(
                    ...currentValue.reports.filter(
                        (report) =>
                            moment(report.date).isSameOrAfter(startDate) &&
                            moment(report.date).isSameOrBefore(endDate)
                    )
                );
                return accumulator;
            }, []);

            // Calculate the total amount
            const totalAmount = filteredReports.reduce((sum, report) => sum + report.amount, 0);

            // Create an Excel workbook
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Reports');

             // Define worksheet columns based on selected columns
             worksheet.columns = selectedColumns.map((columnKey) => ({
                header: columnKey.charAt(0).toUpperCase() + columnKey.slice(1),
                key: columnKey,
                width: 25,
            }));

            // Create a new array containing only the selected columns
            const selectedData = filteredReports.map((report) => {
                const rowData = {};
                selectedColumns.forEach((columnKey) => {
                    rowData[columnKey] = report[columnKey];
                });
                worksheet.addRow(rowData);
                return rowData;
            });

            // Add a row for the total amount
            worksheet.addRow({ date: 'Total:', amount: totalAmount });

            // Generate a unique filename for the Excel file
            const excelFileName = `reports_${startDateFormatted}_${endDateFormatted}.xlsx`;
            const excelFilePath = path.join(__dirname, `../public/templates/`, excelFileName);

            // Save the Excel file to the "public/excels" directory
            await workbook.xlsx.writeFile(excelFilePath);

            return res.status(200).json({
                message: 'Reports for the current month',
                filename: excelFileName,
                totalAmount: totalAmount,
                data: selectedData,
            });
        }
    } catch (error) {
        return next(error);
    }
};

