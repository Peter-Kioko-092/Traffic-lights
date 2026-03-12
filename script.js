let circles = document.querySelectorAll('.circle');
let lightIndex = 0;


const colors = ['col1', 'col2', 'col3'];

setInterval(() => {
    changeLight();
}, 2000); 

function changeLight() {
    
    circles[lightIndex].classList.remove(colors[lightIndex]);
    lightIndex++;

 
    if (lightIndex > 2) {
        lightIndex = 0;
    }

    circles[lightIndex].classList.add(colors[lightIndex]);
}