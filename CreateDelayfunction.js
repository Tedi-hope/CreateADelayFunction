function delay(){
   const promisemsg=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve ("World");
    },2000);
   });

   return promisemsg;
}


async function displayMsg(){
  console.log("Hello");
  let msg2= await delay();
  console.log(msg2);
}

displayMsg();