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






app.use(express.json());

app.use("/users", require("./routes/users.routes"));

// Skip authentication for the public lot details route
app.use("/lot", require("./routes/lot.routes.public"));

app.use(errors.errorHandler);

app.listen(process.env.PORT || 4000, function () {
    console.log("Ready to Go!");
});
