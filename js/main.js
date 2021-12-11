'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}



{
  function play(){
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++;
      if (currentIndex > 2) {
        currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play();
    }, 3000);
  }
  const images = document.querySelectorAll('.hero img');
  let currentIndex = 0;

  play();
}

{
  // Intersection Observer API

  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const observer = new IntersectionObserver(callback, {
    threshold: 0.2,
  });

  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });
}