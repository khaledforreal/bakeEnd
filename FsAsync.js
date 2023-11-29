const {readFileSync ,writeFileSync, readFile, writeFile}=require('fs');
console.log("start");
readFile('./content/text.txt','utf8' , (err,result)=>{
    if (err){ 
        console.log(err);
        return;

    }
    const first = result;
    readFile ('./content/text2.txt','utf8' , (err,result)=>{
        if (err){ 
            console.log(err);
            return;
    
        }
        const second = result;
        writeFile(
            './content/resultAsync.txt' ,
             `here is the result : ${first},${second}` ,
             (err,result)=>{ 
                if(err){
                    console.log(err)
                    return
                }
                console.log("task is done");

             })
    })

    

})
console.log("satating the next task");