// Alternância de tema
const btn = document.getElementById('tema');
const body = document.body;

btn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  // Muda o ícone do botão
  btn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});


