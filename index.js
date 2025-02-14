const endDate = "09 March 2025 01:00PM"

let date = document.getElementById('end-date')
date.innerHTML= endDate


const clock = () =>{
    const end = new Date(endDate)
    const now = new Date()
    // console.log(end,now)
    const diff = (end - now)/1000;
    console.log(diff)
    //We will calculate Days
    

}

clock()