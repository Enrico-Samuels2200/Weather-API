const router = require('express').Router();
const messageModel = require('../models/message');
const nodemailer = require('nodemailer');

// Send email to database
router.post('/', async (req, res) => {
    const message = new messageModel({
        name: req.body.fullName,
        email: req.body.email,
        subject: req.body.contactNumber,
        message: req.body.message
    });

    // Login to existing email account that will act as sender.
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.SENDER_EMAIL_PASSWORD
        }
    });

    // This setup the mail that will be sent along with the recipient
    let mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: process.env.RECIPIENT_EMAIL,
        subject: `Message from ${req.body.name}`,
        text: `Name: ${req.body.name}\nSubject: ${req.body.subject}\nEmail: ${req.body.email}\nMessage:\n${req.body.message}`
    };

    try {
        // Sends and saves message to database
        const saveMessage = await message.save();
        res.json(saveMessage);

        /* 
            Once the message is saved to the database it'll send it to the
            recipient email as a notification.
        */
        transporter.sendMail(mailOptions);
    }
    catch (err) {
        // If an error occurs it'll be captured.
        res.json({ message: err });
    };
});

module.exports = router;