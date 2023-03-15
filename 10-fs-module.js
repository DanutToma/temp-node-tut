const {readFileSync, writeFileSync, readFile, writeFile} = require('fs')
console.log('start1')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first);
console.log(second);

writeFileSync('./content/result-sync.txt',
`\nHere we have the result ${first} , ${second}`,
{flag:'a'})

console.log('Done with the first');
console.log('Starting with the next');

readFile('./content/first.txt','utf-8',(err,result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('content/result-async.txt',
        `Here are the the files : \n ${first} \n ${second}`,
        (err,result) => {
            if(err){
                console.log(err)
                return
            }else{
                console.log('Done With this task')
            }
        }
        )
    })
})
console.log('Starting with the next task')