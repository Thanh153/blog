const app = require("express")();
var admin = require("firebase-admin");

var serviceAccount = require("./my-blog-70de5-firebase-adminsdk-rndds-ac01c5bbc5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://my-blog-70de5.firebaseio.com"
});

app.get('/setAdmin', async(req, res) => {
    admin.auth().setCustomUserClaims('Va4pZxnm0sfWkoQpDEtDehjncs42', {
      type: 'administrator'
    }).then(() =>console.log('done'))
})  

app.listen(4000, () => console.log('listening on port 4000'));