
  // Initialize Swiper
  const swiper = new Swiper('.swiper', {
    loop: true, // Optional: Enables infinite looping
    navigation: {
      nextEl: '.swiper-button-next',  // The "next" button
      prevEl: '.swiper-button-prev',  // The "previous" button
    },
    autoplay: {
      delay: 3000,  // Optional: Adjust the time (in ms) between slides
    },
    // Additional configuration options (optional)
    slidesPerView: 1,  // You can adjust the number of slides visible at once
    spaceBetween: 10,  // Space between slides (in px)
  });