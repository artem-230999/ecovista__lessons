document.addEventListener('DOMContentLoaded', function () {
  
  // Banner Swiper
	const swiperBanner = new Swiper('.banner-swiper', {
    speed: 700,
    spaceBetween: 50, 
    slidesPerView: 1,
    pagination: {
      enabled: true,
      el: '.banner-swiper .swiper-pagination',
      clickable: true,
    },
    navigation: {
      enabled: true,
      prevEl: '.banner-swiper .swiper-button-prev',
      nextEl: '.banner-swiper .swiper-button-next',
      clickable: true
    }
  });

}, false);