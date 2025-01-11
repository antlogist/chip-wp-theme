(function ($) {
  
  wp.customize('phone', function (value) {
    value.bind(function (newval) {
      $('#phone').html(newval);
    });
  });
  
  wp.customize('slide_one', function (value) {
    value.bind(function (newval) {
      $('#slide_one').attr("src", newval);
    });
  });
  
  wp.customize('slide_two', function (value) {
    value.bind(function (newval) {
      $('#slide_two').attr("src", newval);
    });
  });
  
  wp.customize('slide_three', function (value) {
    value.bind(function (newval) {
      $('#slide_three').attr("src", newval);
    });
  });
  
  wp.customize('about_img', function (value) {
    value.bind(function (newval) {
      $('#aboutImg').attr("src", newval);
    });
  });
  
  wp.customize('products_img', function (value) {
    value.bind(function (newval) {
      $('#productsImg').attr("src", newval);
    });
  });
  
  wp.customize('contact_img', function (value) {
    value.bind(function (newval) {
      $('#contactImg').attr("src", newval);
    });
  });
  
})(jQuery);
