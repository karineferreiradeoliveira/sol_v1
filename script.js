// Selecionar o menu e o botão de sair
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const exitButton = document.getElementById('exit-btn');

// Abrir o menu mobile ao clicar no ícone do hamburger
hamburger.addEventListener('click', () => {
  navLinks.classList.add('active');
});

// Fechar o menu ao clicar no botão "Sair" ou em um link
exitButton.addEventListener('click', () => {
  navLinks.classList.remove('active');
});

navLinks.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('active');
  }
});
