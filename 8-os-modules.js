const os = require('os')

//info about current OS

const user = os.userInfo();
console.log(user)

//method returns the system uptime

console.log(`Uptime  = ${os.uptime()} seconds`);

const currentOs = {
    name :os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)