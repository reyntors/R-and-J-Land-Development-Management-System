const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dbConfig = require('./config/db.config');
const errors = require('./middlewares/errors');



const app = express();
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

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
app.use("/letter", require("./routes/guestForms.routes"));
app.use("/birtinrequest", require("./routes/guestForms.routes"));
app.use("/individualbuyer", require("./routes/guestForms.routes"));


app.use("/lot", require("./routes/lot.routes.public"));
app.use("/reservation", require("./routes/reservation.routes"));

app.use(errors.errorHandler);

app.listen(process.env.PORT, function () {
    console.log("Ready to Go!");
});
