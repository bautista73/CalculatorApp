const actscreen = document.querySelector('.act-screen'); //active screen
const inactscreen = document.querySelector('.in-screen'); //inactive screen
const buttons = document.querySelectorAll('.button'); //buttons
const digits = []; //screen/display array 

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if(actscreen.classList.contains('in-screen')) toNoraml()
        if(e.target.innerText == '=') return showresult()
        if(e.target.innerText == 'del') return removeDigits()
        if(e.target.innerText == 'C') return clearresult()
        digits.push(e.target.innerText)
        update()
    })
})

function update() {
    actscreen.innerText = digits.join('') || 0
    inactscreen.innerText = eval(digits.join('')) || 0
}

function toNoraml() {
    actscreen.classList.add('act-screen')
    actscreen.classList.remove('in-screen')
    inactscreen.classList.remove('act-screen')
    inactscreen.classList.add('in-screen')
}

function showresult() {
    actscreen.classList.remove('act-screen')
    actscreen.classList.add('in-screen')
    inactscreen.classList.add('act-screen')
    inactscreen.classList.remove('in-screen')
    digits[0] = eval(digits.join('')) || ''
    digits.length = 1
}

function clearresult() {
    digits.length = 0
    actscreen.innerText = 0
    inactscreen.innerText = 0
}

function removeDigits() {
    digits.pop()
    update()
}
