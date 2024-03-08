const User = require('../models/user.model');
const { uploadAttachment } = require('../middlewares/multer');
const Report = require('../models/reports.model')
const { stopLotReservationRollback } = require('./reservation.controller');
const requestTransaction = require('../models/requestTransaction.model');


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
        userId: client.userId,
        attachments: attachments ? [{
          filename: attachments.originalname,
          contentType: attachments.mimetype,
          url: attachments.location,
        }]:[],
    
      }

      const request = await requestTransaction.findOne()

       if (!request) {

        console.log(!request)
           // If requests object doesn't exist, create it
           const newRequests = new requestTransaction({ request: [newTransaction] });
           await newRequests.save();
       }else{

           
            // Check if the requestLegitId already exists in the requests array
            const existingRequest = request.request.find(item => item.userId === newTransaction.userId);
            

            if (!existingRequest) {
                // If the requestLegitId doesn't exist, push the new request
                request.request.push(newTransaction);
                // Save to requests
                await request.save();

            }
    }

      return res.status(200).json({
        message: `${client.username}, Transaction request  successfully.`,
        data: newTransaction,
      });

      });

      // Process the uploaded file if it exists
      // if (attachments) {
      //   const fileData = {
      //     filename: attachments.originalname,
      //     contentType: attachments.mimetype,
      //     url: attachments.location,
          
      //   };

        // Push the file data into the attachments array
        // newTransaction.attachments.push(fileData);

       


        
      

      // Push the new transaction into the client's transactions array
      // client.transactions.push(newTransaction);

      


  //     let amountPaid = parseFloat(newTransaction.amount);
  //     let totalAmountPayable = parseFloat(client.accountingDetails.totalAmountPayable);

  //     if(newTransaction.purpose === 'reservation'){
 
      


  //         client.paymentDetails.reservationPayment = newTransaction.amount;

  //       if(client.accountingDetails.totalPayment === 0) {

  //         client.accountingDetails.totalPayment = client.paymentDetails.reservationPayment;
        
  //       }else{
  //         client.accountingDetails.totalPayment += client.paymentDetails.reservationPayment;
  //       }



  //     }
  //     if(newTransaction.purpose === 'downpayment'){
 

  //       client.paymentDetails.downPayment = amountPaid;

  //       if(client.accountingDetails.totalPayment === 0){
              
  //         client.accountingDetails.totalPayment = amountPaid;
  
  //       }else{
  
  //         client.accountingDetails.totalPayment += amountPaid
  //       }

  //     }
 

      
      

  //       if (newTransaction.purpose === 'monthly-payment') {


  //         if(client.approvePaymentScheme.typePayment != 'cash'){

  //           if( 
  //             client.reservationAgreement.isSubmitted === false ||
  //             client.approvePaymentScheme.isSubmitted === false ||
  //             client.paymentDetails.reservationPayment === 0 ||
  //             client.paymentDetails.downPayment === 0
  //           ){

  //             return res.status(404).json({
  //               message: `Client ${client.fullname} has not submitted all the required documents. A transaction cannot be made. Please process all the necessary documents to proceed.`,
  //             });

               
  //       }else{

  //             if(client.accountingDetails.totalPayment === 0){
              
  //               client.accountingDetails.totalPayment = amountPaid;
        
  //             }else{
        
  //               client.accountingDetails.totalPayment += amountPaid
  //             }
        
  //             if( client.accountingDetails.totalAmountPayable === 0){
        
  //               client.accountingDetails.totalAmountPayable = totalAmountPayable - amountPaid;
        
  //             }else{
        
  //               client.accountingDetails.totalAmountPayable -= amountPaid
        
  //             }

  //       }
               
  //       }else{
  //         return res.status(401).json({message: 'The transaction cannot be made because the clients type payment is not installment!'})
  //       }

  //     }
      
    
   

  //     if (newTransaction.purpose === 'spot-cash'){

  //       if(client.approvePaymentScheme.typePayment === 'cash'){

  //       if( 
  //           client.reservationAgreement.isSubmitted === false ||
  //           client.approvePaymentScheme.isSubmitted === false ||
  //           client.paymentDetails.reservationPayment === 0 ||
  //           client.paymentDetails.downPayment === 0
  //         ) {

  //           return res.status(404).json({
  //             message: `Client ${client.fullname} has not submitted all the required documents. A transaction cannot be made. Please process all the necessary documents to proceed.`,
  //           });
  //         }else{

  //           if(client.accountingDetails.totalPayment === 0){

  //             client.accountingDetails.totalPayment = amountPaid;
      
  //           }else{
      
  //             client.accountingDetails.totalPayment += amountPaid
  //           }

  //         }

  //     }else{
  //       return res.status(401).json({message: 'The transaction cannot be made because the clients type payment is not cash!'})
  //     }

      
  // }

         

  //     // Save the updated user record
  //     await client.save();

     

  //     const newReportEntry = {
  //       date: newTransaction.date,
  //       fullname: client.fullname,
  //       amount: newTransaction.amount,
  //       purpose: newTransaction.purpose,
  //       address: client.homeAddress,
  //       contactNo: client.contactNumber,
  //       fblink: client.fbAccount,
  //       email: client.email,
  //       civilStatus: client.profileDetails.civilStatus,
  //       spouseName: client.profileDetails.spouseName,
  //       occupation: client.profileDetails.occupation,
  //       businessMonthlyIncome: client.profileDetails.businessMonthlyIncome,
  //       buyerSourceOfIncome: client.profileDetails.buyerSourceOfIncome,
  //       typeOfEmployment: client.profileDetails.typeOfEmployment,
  //       employer: client.profileDetails.employer,
  //       employerAddress: client.profileDetails.employerAddress,
  //       grossSalary: client.profileDetails.grossSalary,
  //       businessName: client.profileDetails.businessName,
  //       businessAddress: client.profileDetails.businessAddress,
  //       monthlyGrossIncome: client.profileDetails.monthlyGrossIncome,


  //     };

  //     const reports = await Report.findOne();

  //     if (!reports){

  //       const newReports = new Report({ reports: [newReportEntry]  });
  //       await newReports.save();
  //     }else{

  //       reports.reports.push(newReportEntry);

  //       await reports.save();

  //     }

     
  
  } catch (error) {
    return next(error);
  }
};

exports.approvalTransaction = async (req, res) => {
  try {
    const {id, requestId} = req.params;
    const { isApproved } = req.body;

    // Find the client by their userId
    const client = await User.findOne({ userId: id, roles: 'customer' });

    if (!client) {
      return res.status(404).json({
        message: 'Client not found or you do not have permission to add a transaction for this client.',
      });
    }

    if(isApproved === 'approved'){

      const request = await requestTransaction.findOne({"request._id": requestId})

     

      if(request){

        const matchingRequestIndex = request.request.findIndex(item => item._id.toString() === requestId);

        

        if(matchingRequestIndex !== -1) {

          const matchingRequest = request.request[matchingRequestIndex];

                let amountPaid = parseFloat(matchingRequest.amount);
                let totalAmountPayable = parseFloat(client.accountingDetails.totalAmountPayable);

                if(matchingRequest.purpose === 'reservation'){
          
                


                    client.paymentDetails.reservationPayment = matchingRequest.amount;

                  if(client.accountingDetails.totalPayment === 0) {

                    client.accountingDetails.totalPayment = client.paymentDetails.reservationPayment;
                  
                  }else{
                    client.accountingDetails.totalPayment += client.paymentDetails.reservationPayment;
                  }



                }
                if(matchingRequest.purpose === 'downpayment'){
          

                  client.paymentDetails.downPayment = amountPaid;

                  if(client.accountingDetails.totalPayment === 0){
                        
                    client.accountingDetails.totalPayment = amountPaid;
            
                  }else{
            
                    client.accountingDetails.totalPayment += amountPaid
                  }

                }
          

                
                

                  if (matchingRequest.purpose === 'monthly-payment') {

                    console.log("I am here")

                    if(client.approvePaymentScheme.typePayment != 'cash'){

                      if( 
                        client.reservationAgreement.isSubmitted === false ||
                        client.approvePaymentScheme.isSubmitted === false ||
                        client.paymentDetails.reservationPayment === 0 ||
                        client.paymentDetails.downPayment === 0
                      ){

                        return res.status(404).json({
                          message: `Client ${client.fullname} has not submitted all the required documents. A transaction cannot be made. Please process all the necessary documents to proceed.`,
                        });

                        
                  }else{

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
               
        }else{
          return res.status(401).json({message: 'The transaction cannot be made because the clients type payment is not installment!'})
        }

      }
      
    
   

      if (matchingRequest.purpose === 'spot-cash'){

        if(client.approvePaymentScheme.typePayment === 'cash'){

        if( 
            client.reservationAgreement.isSubmitted === false ||
            client.approvePaymentScheme.isSubmitted === false ||
            client.paymentDetails.reservationPayment === 0 ||
            client.paymentDetails.downPayment === 0
          ) {

            return res.status(404).json({
              message: `Client ${client.fullname} has not submitted all the required documents. A transaction cannot be made. Please process all the necessary documents to proceed.`,
            });
          }else{

            if(client.accountingDetails.totalPayment === 0){

              client.accountingDetails.totalPayment = amountPaid;
      
            }else{
      
              client.accountingDetails.totalPayment += amountPaid
            }

          }

      }else{
        return res.status(401).json({message: 'The transaction cannot be made because the clients type payment is not cash!'})
      }

      
  }

         

      // Save the updated user record
      await client.save();

     

      const newReportEntry = {
        date: matchingRequest.date,
        fullname: client.fullname,
        amount: matchingRequest.amount,
        purpose: matchingRequest.purpose,
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

          // request.request.splice(matchingRequest, 1);

          await request.save()

        }else{
          return res.status(404).json({message: 'request not found'})
        }

      
      }else {
        return res.status(404).json({message: 'Not matching request found'})
      }

    }else{
     
        return res.status(500).json({ message: 'The request has been rejected!' });
    }

    return res.status(200).json({
      message: `${client.username}, Transaction request  has been approved.`
    });

    
  } catch (error) {
    
    console.log(error)
    throw error
  }




}


exports.getAllPendingTransaction = async (req, res) => {

    try {

      const request = await requestTransaction.find();

      return res.status(200).json({message: 'all request for approval transaction', data: request});
      
  } catch (error) {
      throw error
  }

    
}




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

    if(user.transactions[transactionIndex].purpose === 'downpayment'){

      user.paymentDetails.downPayment = 0;

    }else if(user.transactions[transactionIndex].purpose === 'reservation'){

      user.paymentDetails.reservationPayment = 0;
    }

    const totalPayment = user.accountingDetails.totalPayment;
    const totalPayable = user.accountingDetails.totalAmountPayable;

      // Ensure totalPayment and totalPayable don't go below zero
    user.accountingDetails.totalPayment = Math.max(0, totalPayment - oldAmount);
    if(user.accountingDetails.totalAmountPayable === 0){

      user.accountingDetails.totalAmountPayable = 0;

    }else{
      
      user.accountingDetails.totalAmountPayable = Math.max(0, totalPayable + oldAmount);
  
    }
    
    
    // Remove the transaction from the array
    user.transactions.splice(transactionIndex, 1);

    await user.save();

    return res.status(200).json({ message: 'Delete successful!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to delete!' });
  }
};
