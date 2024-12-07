const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

require('dotenv').config();

app.use(express.json());
app.use(cors());

//console.log(process.env.MONGODB_URL)

async function main() {
    await mongoose.connect(process.env.MONGODB_URL);

    app.get('/', (req, res) => {
        res.send('react-hotel server is running ...')
    })
}

main().then(() => console.log("mongodb connected!")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})