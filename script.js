// script.js

function somar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        const resultado = num1 + num2;
        document.getElementById('resultado').innerText = resultado;
    } else {
        alert("Por favor, insira dois números válidos.");
    }
}

function subtrair() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        const resultado = num1 - num2;
        document.getElementById('resultado').innerText = resultado;
    } else {
        alert("Por favor, insira dois números válidos.");
    }
}

function multiplicar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        const resultado = num1 * num2;
        document.getElementById('resultado').innerText = resultado;
    } else {
        alert("Por favor, insira dois números válidos.");
    }
}

function dividir() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        if (num2 === 0) {
            alert("Não é possível dividir por zero.");
            document.getElementById('resultado').innerText = "Erro";
        } else {
            const resultado = num1 / num2;
            document.getElementById('resultado').innerText = resultado;
        }
    } else {
        alert("Por favor, insira dois números válidos.");
    }
}

function toggleTheme() {
    document.body.classList.toggle('tema-escuro');
    const themeButton = document.getElementById('theme-toggle');
    if (document.body.classList.contains('tema-escuro')) {
        themeButton.innerText = "🌞 Tema Claro";
    } else {
        themeButton.innerText = "🌙 Tema Escuro";
    }
}

// Função para mostrar/ocultar a seção de Como Usar
document.querySelector('.link-como-usar').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.como-usar').style.display = 'block';
});

document.querySelector('.link-voltar').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.como-usar').style.display = 'none';
});
