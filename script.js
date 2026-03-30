'use strict';

const btn = document.getElementById('btn');
const clock = document.getElementById('clock');
const date = document.getElementById('date');
const greeting = document.getElementById('greeting');

/* BOTÃO TEMA */
btn.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        btn.textContent = "☀️";
    } else {
        btn.textContent = "🌙";
    }
});

/* FUNÇÃO PRINCIPAL */
function atualizar() {
    const now = new Date();

    let h = String(now.getHours()).padStart(2, '0');
    let m = String(now.getMinutes()).padStart(2, '0');
    let s = String(now.getSeconds()).padStart(2, '0');

    clock.textContent = `${h}:${m}:${s}`;

    /* Saudação */
    if (h < 12) {
        greeting.textContent = "Bom dia ☀️";
    } else if (h < 18) {
        greeting.textContent = "Boa tarde 🌤️";
    } else {
        greeting.textContent = "Boa noite 🌙";
    }

    /* Data */
    const dias = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
    const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho",
                   "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

    date.textContent = `${dias[now.getDay()]}, ${now.getDate()} de ${meses[now.getMonth()]} de ${now.getFullYear()}`;
}

/* IMPORTANTE */
atualizar(); // roda uma vez
setInterval(atualizar, 1000); // atualiza a cada segundo
