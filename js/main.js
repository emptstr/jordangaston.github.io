window.sr = ScrollReveal({
  reset: false,
  duration: 600,
  easing: 'cubic-bezier(.694,0,.335,1)',
  scale: 1,
  viewFactor: 0.3,
});

window.sr.reveal('#intro-greeting');
window.sr.reveal('#intro-text');
window.sr.reveal('#intro-contact');

document.addEventListener('DOMContentLoaded', function () {
  const hand = document.querySelector('.waving-hand');

  function waveOnLoad() {
    hand.classList.add('wave');
    setTimeout(function () {
      hand.classList.remove('wave');
    }, 2000);
  }

  setTimeout(function () {
    waveOnLoad();
  }, 1000);


  hand.addEventListener('mouseover', function () {
    hand.classList.add('wave');
  });

  hand.addEventListener('mouseout', function () {
    hand.classList.remove('wave');
  });
});
