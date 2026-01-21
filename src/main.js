import './style.css'

// Optional: Add some simple interactivity or console log
console.log('Seeker Cat is live!');

const btn = document.getElementById('buyBtn');
btn.addEventListener('click', () => {
  // Placeholder for buy action
  alert('WAGMI! $SKRCAT to the moon! 🚀');
});

// Community button is now a direct link

// Parallax or tilt effect for the image could go here
const catImage = document.querySelector('.cat-image');
document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const x = (window.innerWidth / 2 - clientX) / 50;
  const y = (window.innerHeight / 2 - clientY) / 50;
  
  if(catImage) {
    catImage.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
  }
});
