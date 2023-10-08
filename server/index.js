const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dbConfig = require('./config/db.config');
const errors = require('./middlewares/errors');
const { GridFSBucket } = require('mongodb');


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

// Initialize GridFS
const db = mongoose.connection;


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


app.get('/collections', async (req, res) => {
    try {
      const collections1 = await mongoose.connection.db.listCollections().toArray();
      const collectionNames = collections1.map((collection) => collection.name);
      res.json({ collections: collectionNames });


      const db = mongoose.connection;
        const gridFSBucket = new GridFSBucket(db);

        const collections2 = await db.db.listCollections().toArray();

        console.log(collections2);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


app.use(errors.errorHandler);

app.listen(process.env.PORT, function () {
    console.log("Ready to Go!");
});
