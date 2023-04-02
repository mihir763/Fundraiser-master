# Fundraiser

Fundraiser is a platform to raise funds with an easy and beautiful interface. The only fees are those you pay to Stripe.

It is built with React, Express, and Node. Currently, data is stored in DynamoDB but could easily be adapted to any NoSQL platform that accepts JSON documents (like MongoDB). With some minor re-writes, it could use MySQL.

> This project is still in active development, so there will be many updates and possibly breaking changes to come

### Features

* A beautiful space to tell your story
* Highlight your donors, either by name or anonymously
* Clearly detail fees
* Super fast and responsive design
* Handles payments via [Stripe](https://stripe.com/)
* Easy social sharing
* Open source, so adapt it to your needs

### Step-by-Step

1. Clone the Fundraiser repository from GitHub, change to the new directory, and install required dependencies (for both client and server)
```bash
git clone git@github.com:lemworld/fundraiser.git
cd fundraiser/
npm install
cd server/
npm install
cd ../
```

2. You'll need to edit the constants file for each client and server, substituting your own values. Start off by copying the example constants files:
```bash
cp src/constants-example.js src/constants.js
cp server/constants-example.js server/constants.js
```

3. Open the **client** constants file in your favorite text editor (we'll use `nano` here)
```bash
nano src/constants.js
```
Substitute your own Stripe credentials and server address here
```js
const AppConstants = {
    STRIPE_PK_TEST: "pk_test_yourtestpublishablekey",
    STRIPE_PK_PROD: "pk_yourprodpublishablekey",
    STRIPE_TEST_MODE: true, // Set this to false to stop using the Stripe testing environment
    PAYMENT_SERVER_URL: "http://localhost:3001"
};
```
There are several other strings in this file you can edit to customize the site for your needs.

4. Open the **server** constants file in your favorite text editor
```bash
nano server/constants.js
```
Substitute your own Stripe credentials and server address here
```js
const ServerConstants = {
    STRIPE_PK_TEST: "pk_test_yourtestpublishablekey",
    STRIPE_SK_TEST: "sk_test_yourtestsecretkey",
    STRIPE_PK_PROD: "pk_yourprodpublishablekey",
    STRIPE_SK_PROD: "sk_yourprodsecretkey",
    STRIPE_TEST_MODE: true, // Set this to false to stop using the Stripe testing environment
    PAYMENT_SERVER_URL: "http://localhost:3001"
};
```

5. Run the `create-table` script to create the Donations table in DynamoDB. If you run into any authentication errors, make sure you have your IAM credentials in `~/.aws/credentials`.
```bash
node server/create-table.js
```

6. Launch both client and server with one command (we use Concurrently to make this happen)
```bash
npm start
```
