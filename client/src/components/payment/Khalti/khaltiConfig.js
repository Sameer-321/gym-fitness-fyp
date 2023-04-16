import myKey from "./khaltiKey";
import axios from "axios";
import moment from 'moment';

export function khaltiConfig(productName, productIdentity) {

  let config = {
    // replace this key with yours
    publicKey: myKey.publicTestKey,
    productIdentity: `${productIdentity}`,
    productName: `${productName}`,
    productUrl: `http://fitnessGym.com/subscription/${productName}`,
    eventHandler: {
      async onSuccess(payload) {
        // hit merchant api for initiating verfication
        // console.log(payload);
        const response = await axios.post(
          "http://localhost:5000/api/v1/payment/khalti",
          payload
        );
        console.log(response, 19);
        //res comes in
        //if response.status==200 then hit subscription APi
        if (response.status === 200) {
        }
      },
      // onError handler is optionalc
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log("widget is closing");
      },
    },
    paymentPreference: [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
  };
  return config;
}
