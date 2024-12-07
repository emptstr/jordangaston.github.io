
document.addEventListener('DOMContentLoaded', function () {
  const sr= ScrollReveal({
    reset: true,
    duration: 800,
    easing: 'cubic-bezier(.694,0,.335,1)',
    scale: 1,
    viewFactor: 0.3,
  });
  sr.reveal('#intro-greeting');
  sr.reveal('#intro-text', { viewFactor: 0.8 });
  sr.reveal('#intro-contact');
  sr.reveal('.experience', {

  });

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
