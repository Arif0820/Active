function ak() {
  var ccion=document.querySelector('.bar i');
      ccion.classList.toggle('bi-x');
      ccion.classList.toggle('bi-list'); 

  var mmenu=document.getElementById('navbar');
      mmenu.classList.toggle('show');  

 }

 function bk() {
     var angl=document.querySelector('.bi-chevron-down');
         angl.classList.toggle('bi-chevron-up');     
 }
 
 var swiper = new Swiper(".mySwiper", {
   spaceBetween: 30,
   loop: true,
   pagination: {
    el: ".swiper-pagination",
    clickable: true,
   },
   autoplay: {
      delay: 3000,
  },
});

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
},
loop: true,
});


var swiper = new Swiper(".mySwiperss", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  loop: true,
});
