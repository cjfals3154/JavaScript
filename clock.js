// const clock = document.querySelector("h2#clock")

// function getClock(){
//     const date = new Date ()
//     const hours = String(date.getHours()).padStart(2,"0");
//     const minutes = String(date.getMinutes()).padStart(2,"0");
//     const seconds = String(date.getSeconds()).padStart(2,"0");
    
//     clock.innerText = `${hours}:${minutes}:${seconds}`;
// }

// getClock();
// setInterval(getClock, 1000);


const clock = document.querySelector("h2#clock")

function getClock(){
    const date = new Date();
    const 시 = String(date.getHours()).padStart(2,"0");
    const 분 = String(date.getMinutes()).padStart(2,"0");
    const 초 = String(date.getSeconds()).padStart(2,"0");
    
    clock.innerText = `${시}:${분}:${초}`
}

getClock();
setInterval(getClock, 1000);






































