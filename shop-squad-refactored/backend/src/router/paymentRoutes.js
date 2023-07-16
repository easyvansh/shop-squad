const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51NNG3sSD9H14jkBFQgqkAxgKeql3HgocegRqpGpZsJOQmcATbtsXjvLZHZFy3xiD4vHhZSMvPS0y65Cx5PJX2B1Z00aXCSut86');

// payment endpoints

router.post('/intent', async (req, res) => {
// Create a payment intent
try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount, // Integer , usd -> pennies
      currency: 'sgd',
      automatic_payment_methods: {
        enabled: true,
      },
    });


// Return the secret
res.json({ paymentIntent: paymentIntent.client_secret });
} catch (e) {
  res.status(400).json({
    error: e.message,
  });
}
});




module.exports = router;