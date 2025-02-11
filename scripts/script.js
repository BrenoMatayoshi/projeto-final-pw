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

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { 
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    });
});

document.querySelectorAll(".hidden").forEach(card => myObserver.observe(card));

const toggleButton = document.getElementById("toggle-theme");

// Função para aplicar o tema com base na escolha
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
}

// Checa se já existe uma preferência salva no localStorage
const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

// Atualiza o estado do botão se o tema salvo for dark
toggleButton.checked = savedTheme === "dark";

// Ao mudar o estado do botão, salva a escolha no localStorage
toggleButton.addEventListener("change", function() {
  const newTheme = toggleButton.checked ? "dark" : "light";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});