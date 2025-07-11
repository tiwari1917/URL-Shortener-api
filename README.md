# 🔗 Mini URL Shortener API

A simple and efficient REST API built with **JavaScript**, **Node.js**, **Express.js**, and **MongoDB** that allows users to shorten long URLs, access them via a short code, and get redirected to the original URL. It also includes optional expiry, analytics tracking, and rate limiting. ⚡

---

## 🚀 Features

- 🔗 Shorten long URLs
- 🚀 Redirect using short codes
- 📅 Optional expiry date support
- 📊 Track number of clicks
- 🛡️ Rate limiting to prevent abuse
- ⚠️ Input validation and error handling

---

## 🛠️ Tech Stack

- **Language**: JavaScript
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)

---

## 🧑‍💻 Setup Instructions

## 1. 📥 Clone the Repository
```bash
git clone https://github.com/your-username/mini-url-shortener.git
cd mini-url-shortener
npm install
```

## 2.📦 Install Backend Dependencies

```bash
npm install
```

## 3. 🔐 Configure Environment Variables
Create a .env file in the root directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
```

---

## 4. ▶️ Start the Server
You can start the server in two ways:

## ✅ Start Normally

```bash
node server.js
```
🟢 Console output:

```bash
MongoDB connected...
Server running on port 5000
```

## 🔁 Start in Dev Mode (with auto-restart)
First, install nodemon (if not already):

```bash
npm start --save-dev nodemon
```
Then run:

```bash
npx nodemon server.js
```

## 🌐 Visit the API at:

```arduino
http://localhost:5000
```
Use Postman or your browser to test endpoints.

## 🧪 API Endpoints

## ➕ POST /shorten
Create a shortened URL.
- Body Parameters:
```json
{
   "url": "https://example.com/very/long/link",
   "expiryDate": "2025-08-01T23:59:59.000Z" // optional
}
```
- Response:
```json
{
   "shortUrl": "http://localhost:5000/abc123"
}
   ```
## 🔁 GET /:code
Redirect to the original URL via short code.
- Example:
```http
GET http://localhost:5000/abc123
```
- If valid and not expired: redirects to original URL
- If expired: returns 410 Gone
- If invalid: returns 404 Not Found

---

## 🧰 Rate Limiting

This API is protected using in-memory rate limiting middleware:
- ✅ Max 100 requests per IP per 15 minutes
- ⚠️ Exceeding the limit returns:

```json
{
    "error": "Too many requests from this IP. Please try again later."
}
```

---

## 📊 Analytics (Bonus)

Each time a short URL is accessed, the API tracks the total number of clicks (clickCount) for basic analytics.

----

## 📁 Folder Structure
```bash
├── config/
│   └── db.js
├── controllers/
│   └── urlController.js
├── middleware/
│   └── rateLimiter.js
├── models/
│   └── Url.js
├── routes/
│   └── urlRoutes.js
├── .env
├── server.js
├── package.json
```
---

## 🛡️ Validation & Error Handling

- 400 – Invalid URL input
- 404 – Short code not found
- 410 – Short URL expired
- 429 – Too many requests (rate limited)
- 500 – Internal server error

---

## 💬 Let's Connect
Made with ❤️ by Vaishnavi Tiwari

