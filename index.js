const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config');

const auth = require('./middlewares/auth');
const errors = require('./middlewares/errors');

const unless = require('express-unless');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => {
        console.log('Database connected');
    },
    (error) => {
        console.log("Database can't be connected:" + error);
    }
);

// Define an array of routes that should skip authentication
const skipAuthRoutes = [
    "/users/login",
    "/users/register",
];

// Use the authentication middleware with route exceptions
app.use((req, res, next) => {
    if (skipAuthRoutes.includes(req.path)) {
        // Skip authentication for specific routes
        return next();
    }

    auth.authenticateToken(req, res, next);
});

// auth.authenticateToken.unless = unless;
// app.use(
//     auth.authenticateToken.unless({
//         path: [
//             {url : "users/login", methods: ["POST"]},
//             {url : "users/register", methods: ["POST"]},
//         ],
//     })
// )


app.use(express.json());

app.use("/users", require("./routes/users.routes"));

app.use(errors.errorHandler);

app.listen(process.env.PORT || 4000, function () {
    console.log("Ready to Go!");
});
