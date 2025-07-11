const shortid = require('shortid');
const validUrl = require('valid-url');
const Url = require('../models/Url');

const baseUrl = process.env.BASE_URL;

// POST /shorten
exports.shortenUrl = async (req, res) => {
  const { url, expiryDate } = req.body;

  if (!validUrl.isUri(url)) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  const code = shortid.generate();
  const shortUrl = `${baseUrl}/${code}`;

  try {
    const newUrl = new Url({
      originalUrl: url,
      shortCode: code,
      expiryDate: expiryDate ? new Date(expiryDate) : null, // Optional expiry
    });

    await newUrl.save();

    res.status(201).json({ shortUrl });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// GET /:code
exports.redirectUrl = async (req, res) => {
  try {
    const urlEntry = await Url.findOne({ shortCode: req.params.code });

    if (!urlEntry) {
      return res.status(404).json({ error: 'Short URL not found' });
    }

    if (urlEntry.expiryDate && new Date() > urlEntry.expiryDate) {
      return res.status(410).json({ error: 'Short URL has expired' });
    }

    return res.redirect(urlEntry.originalUrl);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
