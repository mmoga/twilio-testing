const twilio = require('twilio');

const accountSid = 'ACxxxxxxx'; 
const authToken = 'xXXXXxxxxxxXX';  

const client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+12397895954',  
    from: '+14234559734'
})
.then((message) => console.log(message.sid));