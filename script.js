let swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  simulateTouch: true,

  grid: {
    rows: 1,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    enabled: true,
    clickable: true,
  },

  breakpoints: {
    0: {
      initialSlide: 0,
      slidesPerView: 1.2,
      loop: true,
      grid: {
        rows: 1,
      },
      simulateTouch: true,
      pagination: {
        enabled: true,
      },
    },
    480: {
      initialSlide: 0,
      slidesPerView: 2,
      loop: true,
      grid: {
        rows: 1,
      },
      simulateTouch: true,
      pagination: {
        enabled: true,
      },
    },
    767: {
      loop: false,
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      simulateTouch: false,
      pagination: {
        enabled: false,
      },
    },
    1119: {
      loop: false,
      slidesPerView: 4,
      grid: {
        rows: 2,
      },
      simulateTouch: false,
      pagination: {
        enabled: false,
      },
    }
  }
});

btnExpand = document.querySelector('#btn-expand');
let isExpand = false;
btnExpand.addEventListener('click', function (evt) {
  evt.preventDefault();
  scrollMenuMain = document.querySelector('.scroll-menu-main');
  mySwyper = document.querySelector('.swiper');

  if (!isExpand) {
    btnExpand.textContent = 'Скрыть';
    scrollMenuMain.style.height = '350px';
    mySwyper.style.height = '350px';
    swiper.params.grid.rows = 3;
    swiper.update();
    isExpand = true;
  } else {
    btnExpand.textContent = 'Показать все';
    scrollMenuMain.style.height = '250px';
    mySwyper.style.height = '250px';
    swiper.params.grid.rows = 2;
    swiper.update();
    isExpand = false;
  }
});
