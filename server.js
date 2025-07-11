const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const rateLimiter = require('./middleware/rateLimiter');

dotenv.config();
connectDB();

const app = express();

// Apply rate limiter middleware globally
app.use(rateLimiter);
app.use(express.json());


app.use('/', require('./routes/urlRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
