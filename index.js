const endDate = "09 March 2025 01:09PM"
const msg = document.getElementById('final1')

let date = document.getElementById('end-date')
const inputs = document.querySelectorAll('input')
date.innerHTML= endDate


const clock = () =>{
    const end = new Date(endDate)
    const now = new Date()
    // console.log(end,now)
    const diff = (end - now)/1000;
    // console.log(diff)
    //We will calculate Days
   if(diff>0)
   {
    inputs[0].value=Math.floor(diff/ 3600 /24);
    inputs[1].value = Math.floor(diff/3600)%24;
    inputs[2].value = Math.floor(diff/60)%60;
    inputs[3].value = Math.floor(diff%60)
   }
   else{
    // console.log("Yoh have reached Home.")
    msg.innerHTML = "You have reached Home.";
    
   }
  
}

setInterval(
    () => {
        clock()
    },
    1000
)