const img = document.getElementById('img')
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let interVald = null;
const trafficLight = (event) => {
    //console.log(event.target.id) //id de quem desparou ( target)
    stopAutomatic();
    turnOn[event.target.id]();

}
const nextIndex = () => {

    colorIndex = colorIndex < 2 ? ++colorIndex : 0
        /*Utilizando o ternário para fazer o q essas linhas de código fariam
        
        if (colorIndex < 2) {
        colorIndex++
    } else {
        colorIndex = 0;
    }*/
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = colors[colorIndex]
    turnOn[color]();
    nextIndex();
}


const stopAutomatic = () => {
    clearInterval(interVald);
}
const turnOn = {
    'red': () => img.src = "./img/vermelho.png",
    'yellow': () => img.src = "./img/amarelo.png",
    'green': () => img.src = "./img/verde.png",
    'automatic': () => interVald = setInterval(changeColor, 1000)

}
buttons.addEventListener('click', trafficLight)