const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
    apiKey: "3487f761",
    apiSecret: "2wH2JWPjYFrDvX0q"
})

const from = "Vonage APIs"
const to = "380939311710"
const text = 'цфафцаыпкурп'

vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if (responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})