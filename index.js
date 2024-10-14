const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./config/connection')
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./routes/index.route'))

app.get('/', (req, res) => {
    res.send('Server is up and running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server is running on port ${PORT}`);
});
