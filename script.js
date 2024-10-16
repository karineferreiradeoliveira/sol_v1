// Selecionar o menu e o botão de sair
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const exitButton = document.getElementById('exit-btn');

// Abrir o menu mobile ao clicar no ícone do hamburger
hamburger.addEventListener('click', () => {
  navLinks.classList.add('active');
});

// Fechar o menu ao clicar no botão "Sair"
exitButton.addEventListener('click', () => {
  navLinks.classList.remove('active');
});
