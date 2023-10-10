const User = require('../models/user.model');
const { uploadForms } = require('../middlewares/multer');
const Forms = require('../models/forms.model')
const fs = require('fs');
const path = require('path');

exports.getAllFormsById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findOne({ userId: id });

        if (!user) {

            return res.status(404).json({message: 'User not found'});

        }

        const allUserForms = { 
            letterOfIntent: user.letterOfIntent, 
            individualDeclaration: user.individualDeclaration,
            BirTinRequest: user.BirTinRequest
        }

        return res.status(200).json({
            message: `All forms request by ${user.username}`, data: allUserForms,
        });
    }catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}

exports.getForms = async (req, res) => {
    try {
        uploadForms(req, res, async function (error) {
            if (error) {
                return res.status(500).json({message: 'File upload failed!', error: error})
            }

            const formFile = req.file;

            

            const myforms = await Forms.findOne()

            const fileData = {
                filename: formFile.originalname,
                contentType: formFile.mimetype,  
                url: formFile.location
              }; 

  

                myforms.forms.push(fileData);

                const savedForm = await myforms.save();

                return res.status(200).json({message: 'Form Added successfully!', data: savedForm});
         

             
        });

    }catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};

exports.retrieveForms = async (req, res) => {

    try {
  
        const { filename } = req.params;

        console.log(filename);
  
      
        const myforms = await Forms.findOne();

        console.log(myforms);

        if (!myforms) {

            return res.status(404).json({message: 'file not found'});
        }
  
         // Specify the path to the uploaded file
         const filePath = path.join(__dirname, '..', 'public', 'uploads','forms', filename );
      
         // Check if the file exist
          if (fs.existsSync(filePath)) {
          // Serve the file using Express's res.sendFile()
          res.sendFile(filePath);
          } else {
          res.status(404).json({ message: 'File not found' });
          }
  
        
    } catch (error) {
  
        return res.status(500).json({ error: 'Internal server error' });
        
    }
  
  }


  exports.getAllRawForms = async (req, res) => {

    try {
  
        const { filename } = req.params;

        console.log(filename);
  
      
        const myforms = await Forms.findOne();

        console.log(myforms);

        if (!myforms) {

            return res.status(404).json({message: 'file not found'});
        }
  
        return res.status(200).json({message: 'List of all forms', data: myforms})
        
    } catch (error) {
  
        return res.status(500).json({ error: 'Internal server error' });
        
    }
  
  }