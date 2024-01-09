const User = require('../models/user.model');
const { uploadAttachment } = require('../middlewares/multer');
const Report = require('../models/reports.model')
const { stopLotReservationRollback } = require('./reservation.controller')


function generateTransactionId(length = 8) {
  const numericCharacters = '0123456789';
  let transactionId = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * numericCharacters.length);
    transactionId += numericCharacters.charAt(randomIndex);
  }
  return transactionId;
}



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

      

      // Find the client by their userId
      const client = await User.findOne({ userId: id, roles: 'customer' });

      if (!client) {
        return res.status(404).json({
          message: 'Client not found or you do not have permission to add a transaction for this client.',
        });
      }

      const transactionId =  generateTransactionId();
      // Create a new transaction
      const newTransaction = {
        transactionId,
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

        // Push the file data into the attachments array
        newTransaction.attachments.push(fileData);
      }

      // Push the new transaction into the client's transactions array
      client.transactions.push(newTransaction);

      if(newTransaction.purpose === 'reservation'){
 
      


          client.paymentDetails.reservationPayment = newTransaction.amount;

        if(client.accountingDetails.totalPayment === 0) {

          client.accountingDetails.totalPayment = client.paymentDetails.reservationPayment;
        
        }else{
          client.accountingDetails.totalPayment += client.paymentDetails.reservationPayment;
          client.accountingDetails.totalAmountPayable = client.accountingDetails.totalAmountDue - client.accountingDetails.totalPayment;
        }



      }
      if(newTransaction.purpose === 'downpayment'){
 

        client.paymentDetails.downPayment = newTransaction.amount;

        const annualInterestRate = 0.02;

        // Calculate the monthly interest rate
        const monthlyInterestRate = annualInterestRate / 12; // Assuming monthly payments

       
        // Define the loan term in months
        const loanTermMonths = 12; // For a 12-month loan term


        const totalAmountDue = client.accountDetails.totalAmountDue;
        
        const downPayment = client.paymentDetails.downPayment || 0;

        const principal = totalAmountDue - downPayment;

      
        // Calculate the monthly amortization
        const numerator = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths);
        const denominator = Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1;
        const monthlyAmortization = (numerator / denominator).toFixed(2)

        client.paymentDetails.monthlyAmortizationDue = monthlyAmortization


      }
 

      

      if (newTransaction.purpose === 'monthly-payment') {

        

        let amountPaid = parseFloat(newTransaction.amount);
        let totalAmountPayable = parseFloat(client.accountingDetails.totalAmountPayable);
        

      if(client.accountingDetails.totalPayment === 0){

        client.accountingDetails.totalPayment = amountPaid;

      }else{

        client.accountingDetails.totalPayment += amountPaid
      }

      if( client.accountingDetails.totalAmountPayable === 0){

        client.accountingDetails.totalAmountPayable = totalAmountPayable - amountPaid;

      }else{

        client.accountingDetails.totalAmountPayable -= amountPaid

      }
           
    }
    
    if (newTransaction.purpose === 'spot-cash'){

      if(client.accountingDetails.totalPayment === 0){

        client.accountingDetails.totalPayment = amountPaid;

      }else{

        client.accountingDetails.totalPayment += amountPaid
      }

    }
         

      // Save the updated user record
      await client.save();

     

      const newReportEntry = {
        date: newTransaction.date,
        fullname: client.fullname,
        amount: newTransaction.amount,
        purpose: newTransaction.purpose,
        address: client.homeAddress,
        contactNo: client.contactNumber,
        fblink: client.fbAccount,
        email: client.email,
        civilStatus: client.profileDetails.civilStatus,
        spouseName: client.profileDetails.spouseName,
        occupation: client.profileDetails.occupation,
        businessMonthlyIncome: client.profileDetails.businessMonthlyIncome,
        buyerSourceOfIncome: client.profileDetails.buyerSourceOfIncome,
        typeOfEmployment: client.profileDetails.typeOfEmployment,
        employer: client.profileDetails.employer,
        employerAddress: client.profileDetails.employerAddress,
        grossSalary: client.profileDetails.grossSalary,
        businessName: client.profileDetails.businessName,
        businessAddress: client.profileDetails.businessAddress,
        monthlyGrossIncome: client.profileDetails.monthlyGrossIncome,


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

exports.updateTransaction = async (req, res) =>{

  try {
    uploadAttachment(req, res, async function (err) {
      if (err) {
        return res.status(500).json({ message: 'File upload failed', error: err });
      }
    const {id, transactionId} = req.params;
    const updatedData = req.body;
    const attachments = req.file;



    const newTransactionId = Number(transactionId)

    

    const user = await User.findOne({userId: id});

    if (!user) {

      return res.status(404).json({message: 'User is not found'});

    }


    const transactionIndex = user.transactions.findIndex(transaction => transaction.transactionId === newTransactionId);

    

    if (transactionIndex === -1) {
      return res.status(404).json({ message: 'Transaction not found' });
    }


    if (updatedData.amount) {

      const oldAmount = user.transactions[transactionIndex].amount;
      const newAmount = parseInt(updatedData.amount);

      user.transactions[transactionIndex].amount = newAmount;

      if (user.transactions[transactionIndex].purpose === 'reservation') {
        user.paymentDetails.reservationPayment += newAmount - oldAmount;

      } else if (user.transactions[transactionIndex].purpose === 'downpayment') {
        user.paymentDetails.downPayment += newAmount - oldAmount;

        // Recalculate monthly amortization
        const annualInterestRate = 0.02;
        const monthlyInterestRate = annualInterestRate / 12;
        const loanTermMonths = 12;
        const totalAmountDue = user.accountDetails.totalAmountDue;
        const downPayment = user.paymentDetails.downPayment || 0;
        const principal = totalAmountDue - downPayment;
        const numerator = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths);
        const denominator = Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1;
        const monthlyAmortization = (numerator / denominator).toFixed(2);
        user.paymentDetails.monthlyAmortizationDue = monthlyAmortization;

      } else if (user.transactions[transactionIndex].purpose === 'monthly-payment') {
       
        // Update totalPayment and totalAmountPayable based on the difference
        const difference = newAmount - oldAmount;

        user.accountingDetails.totalPayment += difference;
        user.accountingDetails.totalAmountPayable -= difference;
        
      }
    }


    if(updatedData.purpose){

      user.transactions[transactionIndex].purpose = updatedData.purpose;
    }

    if(attachments){

      const fileData = {
        filename: attachments.originalname,
        contentType: attachments.mimetype,
        url: attachments.location,
        
      };

      user.transactions[transactionIndex].attachments = fileData;

    }

    if(updatedData.date){

      user.transactions[transactionIndex].date = updatedData.date
    }



    await user.save();

   return res.status(200).json({
    message: 'Update successfully!',
    data: user.transactions[transactionIndex]
  }); 
    
  })
  } catch (error) {
    
    return res.status(500).json({message: 'failed to update!'})
  }



}

exports.deleteTransactionbyId = async (req, res) => {
  try {
    const { id, transactionId } = req.params;
    const newTransactionId = Number(transactionId);

    const user = await User.findOne({ userId: id });

    if (!user) {
      return res.status(404).json({ message: 'User is not found' });
    }

    const transactionIndex = user.transactions.findIndex(
      (transaction) => transaction.transactionId === newTransactionId
    );

    if (transactionIndex === -1) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    

    const oldAmount = user.transactions[transactionIndex].amount;

    user.accountingDetails.totalPayment = user.accountingDetails.totalPayment - oldAmount 
    user.accountingDetails.totalAmountPayable =  user.accountingDetails.totalAmountPayable - oldAmount

    // Remove the transaction from the array
    user.transactions.splice(transactionIndex, 1);

    await user.save();

    return res.status(200).json({ message: 'Delete successful!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to delete!' });
  }
};
