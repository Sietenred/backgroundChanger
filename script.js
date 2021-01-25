const colors = ["green","red", "rgba(133,122,200)","#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");
btn.addEventListener('click', funtion(){
    // get ramdom number between 0 - 3 

    const randomNumber = 2;
    document.body.style.backgroundColor = colors [rambomNumber];
    color.textContent = colors [rambomNumber];
})