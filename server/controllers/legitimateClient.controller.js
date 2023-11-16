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
      if (result.requestLegitId > maxRequestId) {
        maxRequestId = result.requestLegitId;
      }
    });
  
    // Increment the maximum requestId by 1 to generate a new unique requestId
    const newRequestId = maxRequestId + 1;
  
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


// exports.updateLegitimacy = async (req, res, next) => {
//     try {
//         const { id } = req.params;

//         // Find the user by their userId
//         const updatedUser = await User.findOneAndUpdate(
//             { userId: id },
//             { legitimate: true},
//             { new: true }
//         );
        
//         if (!updatedUser) {
//             return res.status(404).json({
//                 message: 'User not found.',
//             });
//         }

        

//         return res.status(200).json({
//             message: 'User legitimacy status updated successfully.',
//             data: updatedUser,
//         });
//     } catch (error) {
//         return next(error);
//     }
// };

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

      const requestLegitId = await generateRequestLegitId(); 


   const user2 = await User.findOne({username});

   if(!user2){

       return res.status(404).json({message: 'user not found!'});
   }  
   

     return res.status(200).json({message: 'Success!, your request has been sent!'})

    }catch(error){
        console.log(error)
        throw error
    }
};

