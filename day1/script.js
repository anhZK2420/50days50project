const panels = document.querySelectorAll('.panel');

function removeActiveClasses() {
  const activePanel = document.querySelector('.panel.active');
  if (activePanel) {
    activePanel.classList.remove('active');
  }
}

function addActiveClass(panel) {
  panel.classList.add('active');
}

panels.forEach((panel) => {
  panel.addEventListener('click', (e) => {
    removeActiveClasses();
    addActiveClass(panel);
  });
});
