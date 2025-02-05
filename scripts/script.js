function toggleMenu() {
    const checkbox = document.getElementById('menu-burguer');
    checkbox.checked = !checkbox.checked;
}

const texts = ["desenvolvedor!", "estudante!"];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < texts[textIndex].length) {
        document.getElementById('typing').innerHTML = texts[textIndex].substring(0, charIndex + 1) + '<span class="cursor">|</span>';
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(() => {
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;
            typeEffect();
        }, 2500);
    }
}
typeEffect();

const myObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains("show")) { 
            entry.target.classList.add("show");

            // REMOVE A OBSERVAÇÃO IMEDIATAMENTE PARA EVITAR MÚLTIPLOS DISPAROS
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll(".card").forEach(card => myObserver.observe(card));