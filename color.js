const btn = document.querySelector(".btn");
const span = document.querySelector("span");
const body = document.body;

var rSlider = document.querySelector('#red');
var gSlider = document.querySelector('#green');
var bSlider = document.querySelector('#blue');

function changeColor(){
    let red = rSlider.value;    
    let green = gSlider.value;
    let blue = bSlider.value;
    return `rgb(${red}, ${green}, ${blue})`;      
}

rSlider.addEventListener('input',()=>{
    let color = changeColor();
    span.textContent = color;
    body.style.backgroundColor = color;
})

gSlider.addEventListener('input',()=>{
    let color = changeColor();
    span.textContent = color;
    body.style.backgroundColor = color;
})

bSlider.addEventListener('input',()=>{
    let color = changeColor();
    span.textContent = color;
    body.style.backgroundColor = color;
})

function randomColor(){
    let red = Math.floor(Math.random()*256); //0< to >1
    let blue = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);    
    return `rgb(${red}, ${green}, ${blue})`;    
}

btn.addEventListener('click',()=>{
    const Color = randomColor();    
    span.textContent = Color;
    body.style.backgroundColor = Color;
})