const User = require('../models/user.model');
const { uploadAttachment } = require('../middlewares/multer');
const Report = require('../models/reports.model')



exports.addTransaction = async (req, res, next) => {
  try {
    // Add the singleFileUpload middleware here to handle the single file upload
    uploadAttachment(req, res, async function (err) {
      if (err) {
        return res.status(500).json({ message: 'File upload failed', error: err });
      }

      const { id } = req.params;
      const { date, amount, purpose } = req.body;
      const attachments = req.file; // The uploaded file is now available in req.file

      console.log("I receieved:" , attachments);

      // Find the client by their userId
      const client = await User.findOne({ userId: id, roles: 'guest' });

      if (!client) {
        return res.status(404).json({
          message: 'Client not found or you do not have permission to add a transaction for this client.',
        });
      }

      // Create a new transaction
      const newTransaction = {
        date,
        amount,
        purpose,
        attachments: [],
      };

      // Process the uploaded file if it exists
      if (attachments) {
        const fileData = {
          filename: attachments.originalname,
          contentType: attachments.mimetype,
          url: attachments.location,
          
        };
        console.log("File Data:", fileData);

        // Push the file data into the attachments array
        newTransaction.attachments.push(fileData);
      }

      // Push the new transaction into the client's transactions array
      client.transactions.push(newTransaction);

      if(newTransaction.purpose === 'reservation'){
 

          client.paymentDetails.reservationPayment = newTransaction.amount

      }
      if(newTransaction.purpose === 'downpayment'){
 

        client.paymentDetails.downPayment = newTransaction.amount;

        const annualInterestRate = 0.02;

        // Calculate the monthly interest rate
        const monthlyInterestRate = annualInterestRate / 12; // Assuming monthly payments

        console.log('monthly interest:',monthlyInterestRate)
        // Define the loan term in months
        const loanTermMonths = 12; // For a 12-month loan term


        const totalAmountDue = client.accountDetails.totalAmountDue;
        
        const downPayment = client.paymentDetails.downPayment || 0;

        const principal = totalAmountDue - downPayment;

        console.log('principal:', principal )
        // Calculate the monthly amortization
        const numerator = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths);
        const denominator = Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1;
        const monthlyAmortization = (numerator / denominator).toFixed(2)

        console.log('monthlyAmortization:', monthlyAmortization)

        client.paymentDetails.monthlyAmortizationDue = monthlyAmortization


      }

      
      

      if (newTransaction.purpose === 'monthly-payment') {

        const amountPaid = parseFloat(newTransaction.amount);
        const totalAmountDue = parseFloat(client.accountDetails.totalAmountDue);
        
       
        client.accountingDetails.totalAmountDue = totalAmountDue;
     

      if(client.accountingDetails.totalPayment === 0){

        client.accountingDetails.totalPayment = amountPaid;

      }else{

        client.accountingDetails.totalPayment += amountPaid
      }

      if( client.accountDetails.totalAmountPayable === 0){

        client.accountDetails.totalAmountPayable = totalAmountDue - amountPaid;

      }else{

        client.accountingDetails.totalAmountPayable -= amountPaid
        
      }
        
    
       
    }
    
         

      // Save the updated user record
      await client.save();


      const newReportEntry = {
        date: newTransaction.date,
        fullname: client.fullname,
        amount: newTransaction.amount,
        purpose: newTransaction.purpose

      };

      const reports = await Report.findOne();

      if (!reports){

        const newReports = new Report({ reports: [newReportEntry]  });
        await newReports.save();
      }else{

        reports.reports.push(newReportEntry);

        await reports.save();

      }

      return res.status(200).json({
        message: `${client.username}, Transaction added successfully.`,
        data: newTransaction,
      });
    });
  } catch (error) {
    return next(error);
  }
};


exports.getTransaction = async (req, res, next) => {

    try {

        const { id } = req.params;

        const user = await User.findOne({userId: id});

        if (!user) {

          return res.status(404).json({message: 'User is not found'});

        }else{

         const allTransactions = user.transactions;

          return res.status(200).json({message: `${user.username}, All transactions`, data: allTransactions});

        }

      
    } catch (error) {

      return res.status(500).json({message: 'Internal Server Error'});
      
    }







}