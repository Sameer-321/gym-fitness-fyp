import myKey from "./khaltiKey";
import axios from "axios";

let config = {
    // replace this key with yours
    "publicKey": myKey.publicTestKey,
    "productIdentity": "1234567890",
    "productName": "Drogon",
    "productUrl": "http://gameofthrones.com/buy/Dragons",
    "eventHandler": {
        async onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log(payload)
            await axios.post("http://localhost:5000/api/v1/verify-payment",payload)
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};
export default config;