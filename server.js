const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5500; // Change this to your desired port

// Replace these with your Mailgun API credentials and domain
const api_key = '';
const domain = '';

const mailgunClient = mailgun({ apiKey: api_key, domain: domain });

app.use(cors()); // Enable CORS to allow requests from different origins
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve your React app (adjust the path accordingly)
app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/subscribe', (req, res) => {
  const { Email } = req.body;

  const mailgunData = {
    from: 'Your Name <your_email@example.com>',
    to: Email,
    subject: 'Welcome',
    text: 'Welcome, Thanks for subscribing to our product. You will receive daily updates here.',
  };

  mailgunClient.messages().send(mailgunData, (error, body) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      console.log(body);
      res.json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log('Server is running at port ${PORT}');
});