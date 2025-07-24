const btnOpen  = document.getElementById('open');
const btnClose = document.getElementById('close');
const container = document.querySelector('.container');
const nav = document.querySelector('.nav');

btnOpen.addEventListener('click', () => {
  container.classList.add('active');
  btnOpen.classList.add('active');
  btnClose.classList.add('active');
  nav.classList.add('active');
});

btnClose.addEventListener('click', () => {
  container.classList.remove('active');
  btnClose.classList.remove('active');
  btnOpen.classList.remove('active');
  nav.classList.remove('active');
});
