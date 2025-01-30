document.getElementById('confetti-button').addEventListener('click', () => {
  const confettiContainer = document.getElementById('confetti-container');

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = `${Math.random() * 100}%`;
    confettiContainer.appendChild(confetti);

    setTimeout(() => {
      confetti.style.transition = 'transform 2s ease-out, opacity 2s';
      confetti.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg)`;
      confetti.style.opacity = '0';
    }, 100);
  }

  setTimeout(() => {
    confettiContainer.innerHTML = '';
  }, 3000);
});

function getRandomColor() {
  const colors = ['#ff0d57', '#1ce2d8', '#ffb700', '#9f2cff', '#19ff3d'];
  return colors[Math.floor(Math.random() * colors.length)];
}
