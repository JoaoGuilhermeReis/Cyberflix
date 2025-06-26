
    const popup = document.getElementById('popup');
    const btnClose = document.getElementById('closePopup');

    btnClose.addEventListener('click', () => {
      popup.classList.add('hidden');
    });

    const destaque = document.querySelector('.destaque');

  window.addEventListener('scroll', () => {
    const limite = 100;
    if (window.scrollY > limite) {
      destaque.classList.add('hidden');
    } else {
      destaque.classList.remove('hidden');
    }
  });
  