/*

These are constants used in the frontend app. Change these to meet your needs, and rename the file to constants.js

*/

import heroimage from "./page/karl-fredrickson-192686.jpg";

const AppConstants = {
    STRIPE_PK_TEST: "pk_test_yourtestpublishablekey",
    STRIPE_PK_PROD: "pk_yourprodpublishablekey",
    STRIPE_TEST_MODE: true, // Set this to false to stop using the Stripe testing environment
    PAYMENT_SERVER_URL: "http://localhost:3001"
};

export default AppConstants;
