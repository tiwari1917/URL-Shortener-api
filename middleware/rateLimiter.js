const rateLimit = require('express-rate-limit');

// Limit each IP to 100 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP. Please try again later.',
  },
  standardHeaders: true, // Return rate limit info in headers
  legacyHeaders: false,
});

module.exports = limiter;
