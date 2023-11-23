$(".single-item").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768, // Ширина экрана, на которой будет другое количество слайдов
      settings: {
        arrows: false,
        dots: true,
        adaptiveHeight: false,
      },
    },
    {
      breakpoint: 480, // Другая настройка для меньших экранов
      settings: {
        arrows: false,
        dots: true,
        adaptiveHeight: false,
      },
    },
  ],
});
