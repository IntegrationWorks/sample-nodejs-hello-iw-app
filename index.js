const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const pkg = require('./package.json');


// App constants
const port = process.env.PORT || 3000;
const apiPrefix = '/api';

  
// Create the Express app & setup middlewares
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: /http:\/\/(127(\.\d){3}|localhost)/}));
app.options('*', cors());


// ***************************************************************************

// Configure routes
const router = express.Router();

app.get('/', function (req, res) {
    return res.send("Hello Integration Works!");
})

// ***************************************************************************

// Add 'api` prefix to all routes
app.use(apiPrefix, router);

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
