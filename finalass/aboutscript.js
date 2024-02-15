jQuery(document).ready(function($){
  jQuery('.single-item').slick({
      autoplay: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,  // Arrows show honge
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>'
      // More settings...
  });
});
