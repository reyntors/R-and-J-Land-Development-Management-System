const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dbConfig = require('./config/db.config');
const errors = require('./middlewares/errors');
require("dotenv").config()


const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))


app.use(cors());

mongoose.set("strictQuery", false);
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Database successfully connected");
})
.catch((error) => {
    console.error(error);
});

app.use(express.json());
app.use(express.static("public"));


app.use("/users", require("./routes/users.routes"));
app.use("/letter", require("./routes/guestForms.routes"));
app.use("/birtinrequest", require("./routes/guestForms.routes"));
app.use("/individualbuyer", require("./routes/guestForms.routes"));
app.use("/contractdetails", require("./routes/guestForms.routes"));
app.use("/forms", require("./routes/guestForms.routes"));


app.use("/lot", require("./routes/lot.routes"));
app.use("/reservation", require("./routes/reservation.routes"));
app.use("/inquiries", require("./routes/inquiries.routes"));
app.use("/reports", require("./routes/reports.routes"));


app.use(errors.errorHandler);

app.listen(process.env.PORT, function () {
    console.log("Ready to Go!");
});
