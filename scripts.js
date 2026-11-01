

let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = document.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

let active = 0

// Identifica o item que começa ativo
items.forEach((item, index) => {
    if (item.classList.contains('active')) {
        active = index
    }
})

// Função para atualizar o carrossel
function showItem() {

    items.forEach(item => {
        item.classList.remove('active')
    })

    dots.forEach(dot => {
        dot.classList.remove('active')
    })

    items[active].classList.add('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerText =
        String(active + 1).padStart(2, '0')
}

// Botão avançar
nextButton.onclick = () => {

    active = (active + 1) % items.length

    showItem()
}

// Botão voltar
prevButton.onclick = () => {

    active = (active - 1 + items.length) % items.length

    showItem()
}

// Inicializa
showItem()


document.addEventListener('DOMContentLoaded', function() {
    let SaibaMais = document.getElementById('SaibaMais');
    if (SaibaMais) {
        SaibaMais.onclick = () => {
            window.location.href = 'detalhes.01.html';
        };
    }
});


document.addEventListener('DOMContentLoaded', function() {
    let SaibaMais = document.getElementById('SaibaMaisFerrari');
    if (SaibaMais) {
        SaibaMais.onclick = () => {
            window.location.href = 'detalhes.02.html';
        };
    }
});


document.addEventListener('DOMContentLoaded', function() {
    let SaibaMais = document.getElementById('SaibaMaisLamborghini');
    if (SaibaMais) {
        SaibaMais.onclick = () => {
            window.location.href = 'detalhes.03.html';
        };
    }
});

