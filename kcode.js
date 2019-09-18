// Teclas permitidas
const allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
}

// Declaración del codigo konami
const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a']

// Posicionador
let konamiCodePosition = 0

// Event listener
document.addEventListener('keydown', function (e) {
    let key = allowedKeys[e.keyCode]
    let requiredKey = konamiCode[konamiCodePosition]
    // Comprobación de tecla correcta
    if (key == requiredKey) {
        konamiCodePosition++
        // Comprobación de código completo
        if (konamiCodePosition == konamiCode.length) {
            activateCheat()
            konamiCodePosition = 0
        }
    } else {
        konamiCodePosition = 0
    }
})

// Función que se activa cuando el código es introducido
function activateCheat() {
    let r = Math.floor(Math.random() * 256).toString(16)
    let g = Math.floor(Math.random() * 256).toString(16)
    let b = Math.floor(Math.random() * 256).toString(16)
    console.log(r, g, b)
    document.body.style.backgroundColor = '#' + r + g + b
    alert('Cheats Activated')
}