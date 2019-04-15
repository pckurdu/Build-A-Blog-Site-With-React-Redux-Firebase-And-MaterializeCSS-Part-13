//Generate function with firebase-functions packages
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//generate a function indicating a message
exports.firstFunction = functions.https.onRequest((req, res) => {
 res.send("Hello steemit!");
});


