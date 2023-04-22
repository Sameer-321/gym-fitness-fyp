import myKey from "./khaltiKey";
import axios from "axios";

export function khaltiConfig(productName, productIdentity, createSub) {
  // console.log(productName,productIdentity)
  let config = {
    // replace this key with yours
    publicKey: myKey.publicTestKey,
    productIdentity: `${productIdentity}`,
    productName: `${productName}`,
    productUrl: `http://fitnessGym.com/subscription/`,
    eventHandler: {
      async onSuccess(payload) {
        // hit merchant api for initiating verfication
        console.log(payload);
        const response = await axios.post(
          "http://localhost:5000/api/v1/payment/khalti",
          payload
        );
        console.log(response, 19);

        if (response.status === 200) {
          createSub();
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
