
const Report = require('../models/reports.model');

exports.generateReports = async (req, res, next) => {
    try {
        const { date } = req.params;

        console.log(date);

        const reports = await Report.findOne({"reports.date": date});

       

        if (!reports){

            res.status(404).json({message: 'No report found for this date'});
        
        }else{
            

            // Filter the reports array to include only reports with the specified date
            const filteredReports = reports.reports.filter(report => report.date === date);

            return res.status(200).json({ message: 'Reports for the specified date', data: filteredReports });

        }
    
    } catch (error) {
        return next(error);
    }
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

            return res
                .status(200)
                .json({ message: 'Reports for the specified date range', data: filteredReports });
        }
    } catch (error) {
        return next(error);
    }
};


