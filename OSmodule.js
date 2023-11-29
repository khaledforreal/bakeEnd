const os = require('os');
const { uptime } = require('process');

// info about a user 
const user = os.userInfo();
console.log(user);

//method returns the system uptime is seconds 
console.log (`the system uptime is ${os,uptime()} seconds`)


const currentOS = {
    name: os.type() , 
    release :os.release() , 
    totalmem : os.totalmem(),
    freemem : os.freemem() ,
}

console.log(currentOS)