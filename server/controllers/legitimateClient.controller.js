const User = require('../models/user.model');
const UserUpdateRequest = require('../models/userUpdateRequest.model');
const Request = require('../models/requestAddedLegitClient.model');


  
  async function generateRequestId() {
    // Find all documents and their inquiries array
    const results = await UserUpdateRequest.find();
  
    let maxRequestId = 0;
  
    // Loop through the results to find the maximum requestId
    results.forEach((result) => {
      if (result.requestId > maxRequestId) {
        maxRequestId = result.requestId;
      }
    });
  
    // Increment the maximum requestId by 1 to generate a new unique requestId
    const newRequestId = maxRequestId + 1;
  
    return newRequestId;
  }

    
  async function generateRequestLegitId() {
    // Find all documents and their inquiries array
    const results = await Request.find();
  
    let maxRequestId = 0;
  
    // Loop through the results to find the maximum requestId
    results.forEach((result) => {
        if (result.requests && result.requests.length > 0) {
          result.requests.forEach((requests) => {
            maxRequestId = Math.max(maxRequestId, requests.requestLegitId);
          });
        }
      });
    
      // Increment the maximum inquiryId found or initialize to 1 if none exists
      const newRequestId = maxRequestId + 1 || 1;
  
    return newRequestId;
  }
  


exports.listLegitimateClients = async (req, res, next) => {
    try {
        

        const legitimateClients = await User.find({ legitimate: true });
       

        return res.status(200).json({
            message: 'List of legitimate clients',
            data: legitimateClients,
        });
    } catch (error) {
       
        return next(error);
    }
};


exports.updateLegitimacy = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Find the user by their userId
        const updatedUser = await User.findOneAndUpdate(
            { userId: id },
            { legitimate: true},
            { new: true }
        );
        
        if (!updatedUser) {
            return res.status(404).json({
                message: 'User not found.',
            });
        }

        const request = await Request.findOne({"requests.userId": id});

         if(request){

            const matchingRequest = request.requests.find(item => item.userId === id);

         

         if (matchingRequest !== -1 ) {

            

             request.requests.splice(matchingRequest, 1);

             await request.save()
        
         }else{
            return res.status(404).json({message: 'request not found for the specified requestId'})
         }

        }else{
            return res.status(404).json({message: 'No matching  request found '})
        }

        return res.status(200).json({
            message: 'User legitimacy status updated successfully.',
            data: updatedUser,
        });
    } catch (error) {
        return next(error);
    }
};


exports.updateFalseLegitimacy = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Find the user by their userId
        const updatedUser = await User.findOneAndUpdate(
            { userId: id },
            { legitimate: false},
            { new: true }
        );
        
        if (!updatedUser) {
            return res.status(404).json({
                message: 'User not found.',
            });
        }

        

        return res.status(200).json({
            message: 'User legitimacy status updated successfully.',
            data: updatedUser,
        });
    } catch (error) {
        return next(error);
    }
};


exports.listPendingClients = async (req, res, next) => {
    try {
        

        const legitimateClients = await User.find({ legitimate: false });
       

        return res.status(200).json({
            message: 'List of legitimate clients',
            data: legitimateClients,
        });
    } catch (error) {
       
        return next(error);
    }
};


exports.updateRequestLegitimacy = async (req, res) => {
try{
    const username = req.user.username;
    const {id} = req.params;

    const requestData = req.body

    const user = await User.findOne({userId: id});

    if(!user){

        return res.status(404).json({message: 'user not found!'});
    }

    // Generate RequestId
    const requestId = await generateRequestId(); 

    const userRequest = new UserUpdateRequest({

        requestId,
        userId: user.userId,
        updatedData: requestData,
  
      });

      // Save the request to the database
      await userRequest.save();

      //generate date
      const date = new Date()
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based, so add 1 and format as two digits
      const day = String(date.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;

      const user2 = await User.findOne({username});

        if(!user2){

            return res.status(404).json({message: 'user not found!'});
        }  
        

      const requestLegitId = await generateRequestLegitId(); 
      

      const newRequest = {
        requestLegitId,
        requestId: userRequest.requestId,
        approvalStatus: userRequest.approvalStatus,
        userId: user.userId,
        date: formattedDate,
        details: `${user2.roles} ${user2.fullname}, is requested ${user.fullname} to add as legit client`

      };
      
      const request = await Request.findOne()

       if (!request) {

        console.log(!request)
           // If requests object doesn't exist, create it
           const newRequests = new Request({ requests: [newRequest] });
           await newRequests.save();
       }else{

           
            // Check if the requestLegitId already exists in the requests array
            const existingRequest = request.requests.find(item => item.userId === newRequest.userId);
            console.log("i am here",existingRequest)

            if (!existingRequest) {
                // If the requestLegitId doesn't exist, push the new request
                request.requests.push(newRequest);
                // Save to requests
                await request.save();

            }
    }

     return res.status(200).json({message: 'Success!, your request has been sent!'})

    }catch(error){
        console.log(error)
        throw error
    }
};

exports.approvalLegitClient = async (req, res, next) => {
    const { userId, requestId, requestLegitId } = req.params;
    const  {isApproved } = req.body;

    console.log(isApproved)

    try{

    const newrequestLegitId = Number(requestLegitId);

    const user = await User.findOne({ userId });

    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }

        // Check if the recovery code matches
    const updateRequest = await UserUpdateRequest.findOne({ userId: user.userId, requestId: requestId });

    
    if (!updateRequest || updateRequest.userId !== user.userId) {

        console.log(!updateRequest || updateRequest.userId !== user.userId)
        
        return res.status(400).json({ message: 'Request update to this user is not found.' });
    }

     if(isApproved === 'approved'){


        if(updateRequest.updatedData.legitimate){

            user.legitimate = updateRequest.updatedData.legitimate
        }

         await user.save();

         const request = await Request.findOne({"requests.requestLegitId": newrequestLegitId});

         if(request){

            const matchingRequest = request.requests.find(item => item.requestLegitId === newrequestLegitId);

         

         if (matchingRequest !== -1 ) {

             matchingRequest.approvalStatus = isApproved;

             request.requests.splice(matchingRequest, 1);

             await request.save()
        
         }else{
            return res.status(404).json({message: 'request not found for the specified requestId'})
         }

        }else{
            return res.status(404).json({message: 'No matching  request found '})
        }

            // Update the approval status
        updateRequest.approvalStatus = isApproved ? 'approved' : 'rejected';

        
        await updateRequest.save();


        await UserUpdateRequest.deleteOne({ userId: userId, requestId: requestId });


     
        }

        else if(isApproved === 'rejected'){

            console.log("I am here")


             const request = await Request.findOne({"requests.requestLegitId": newrequestLegitId});
             const matchingRequest = request.requests.find(item => item.requestLegitId === newrequestLegitId);
             
             if (matchingRequest !== -1 ) {

                matchingRequest.approvalStatus = isApproved;
   
                request.requests.splice(matchingRequest, 1);

            

            await request.save()

        }

            return res.status(200).json({ message: 'User update request has been ' + isApproved });

           
        }

        console.log("I am here")
        
        return res.status(200).json({ message: 'User update request has been ' + (isApproved ? 'approved' : 'rejected') });


    }catch(error){
        console.log(error);
        return res.status(500).json({ message: 'Approval process failed!' });
    }
    }

exports.getAllRequests = async (req, res) =>{

    try {

        const request = await Request.find();

        return res.status(200).json({message: 'all request approval', data: request});
        
    } catch (error) {
        throw error
    }


}




