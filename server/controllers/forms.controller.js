const User = require('../models/user.model');
const { uploadForms } = require('../middlewares/multer');
const Forms = require('../models/forms.model')

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

            console.log(formFile)

            const newForm = new Forms({
                forms: [],

            })

            const fileData = {
                filename: formFile.originalname,
                contentType: formFile.mimetype,  
              };

              newForm.forms.push(fileData);

              const savedForm = await newForm.save();

              return res.status(200).json({message: 'Form Added successfully!', data: savedForm})

        });

    }catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}