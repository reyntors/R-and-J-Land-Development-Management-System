const jwt = require('jsonwebtoken');



JWT_SECRET_KEY = 'Iron_Dev_Secret_key'

function authenticateToken(req, res, next) {
    
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET_KEY, (err, user)=> {
        if(err) return res.sendStatus(403);
        req.user = user;
     
        next();
    });
}



module.exports = {
    authenticateToken,
   
    
    
};
