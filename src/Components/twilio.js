

const Twilio = (text) => {
    const accountSid = 'ACf6c0dfedf4f68f57fe78a175d8e1b123'; // Your Account SID from www.twilio.com/console
    const authToken = 'b0a1718795761d4d301f6076c7ac1a26'; // Your Auth Token from www.twilio.com/console

    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.messages
        .create({
            body: text,
            to: '+380637101672', // Text this number
            from: '+13862843660', // From a valid Twilio number
        })
        .then((message) => console.log(message.sid));

}
Twilio('some text')