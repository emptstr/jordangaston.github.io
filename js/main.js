
document.addEventListener('DOMContentLoaded', function () {
  const sr= ScrollReveal({
    reset: true,
    duration: 700,
    easing: 'cubic-bezier(.694,0,.335,1)',
    scale: 1,
    viewFactor: 0.3,
  });
  sr.reveal('#intro-greeting');
  sr.reveal('#intro-text');
  sr.reveal('#intro-contact');
  sr.reveal('.cover');
  sr.reveal('.job');
  sr.reveal('.pointing-down-hand', {
    afterReveal: function () {
      const hands = document.querySelectorAll('.pointing-down-hand');
      hands.forEach(hand => {
        hand.classList.add('push');
        setTimeout(function () {
        hand.classList.remove('push');
        }, 5000);
      });
    }
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
