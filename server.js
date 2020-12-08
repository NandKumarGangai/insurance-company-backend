const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const connectDB = require('./config/db');
const insurances_cloud_routes = require('./routes/insurances_cloud_routes');
const insurances = require('./routes/insurances');

const app = express();
dotenv.config({ path: './config.env' });

connectDB();

// Bodyparser for req.body()
app.use(express.json());
app.use(cors());

// Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(helmet());
if (process.env.NODE_ENV === 'development') {
  // HTTP request logger middleware for node.js
  app.use(morgan('dev'));
}

// Call this endpoint if you want to access data from MongoDB Atlas.
app.use('/api/v1/cloud/', insurances_cloud_routes);

// Call this endpoint if you want to access data from dummy file.
app.use('/api/v1/', insurances);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));