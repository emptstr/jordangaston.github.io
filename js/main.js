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
