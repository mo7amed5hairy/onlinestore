let browse_category = document.querySelector('.browse_category');
let browsed_category = document.querySelector('.browsed_category');

browse_category.addEventListener('click',() => {
     browsed_category.classList.toggle('active');
})




// Initialize Swiper //

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var myProducts = new Swiper(".myProducts", {
    slidesPerView: 5,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });

  