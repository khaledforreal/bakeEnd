const {readFileSync ,writeFileSync}=require('fs');
console.log('start');
const first = readFileSync('./content/text.txt','utf8');
const second = readFileSync('./content/text2.txt','utf8');

writeFileSync('./content/result.txt' , `here is the result : ${first},${second}`,
{flag : 'a'}
)
console.log('done with this task');
console.log('stating the next one');
