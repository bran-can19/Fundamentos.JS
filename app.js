// Apuntar al div y al h1
const ball = document.querySelector('div');
const message = document.querySelector('h1');

const eightball = () => {
    // Crear número aleatorio (0 - 7)
    const number = Math.floor(Math.random() * 8);

    // Usar switch/case para mensajes distintos
    switch (number) {
        case 0:
            message.innerText = "Hola✌️";
            break;
        case 1:
            message.innerText = "Caiste como en sus mentiras!!!🤡";
            break;
        case 2:
            message.innerText = "Te engañe como tu ex!!!😶‍🌫️";
            break;
        case 3:
            message.innerText = "¿vamos por unas miches?🙂‍↕️";
            break;
        case 4:
            message.innerText = "Arriba el america!!!✌️";
            break;
        case 5:
            message.innerText = "Xd";
            break;
        case 6:
            message.innerText = "Ya vamonos Sofia!!🫠";
            break;
        case 7:
            message.innerText = "Noseeee!😶‍🌫️";
            break;
        default:
            message.innerText = "¿Qué tal?";
            break;
    }
}

// Añadir el evento de clic
ball.addEventListener('click', eightball);