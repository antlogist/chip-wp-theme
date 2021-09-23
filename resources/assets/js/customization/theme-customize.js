(function ($) {
  
  wp.customize('phone', function (value) {
    value.bind(function (newval) {
      $('#phone').html(newval);
    });
  });
  
  wp.customize('slide_one', function (value) {
    value.bind(function (newval) {
      $('#slideOne').attr("src", newval);
    });
  });
  
  wp.customize('slide_two', function (value) {
    value.bind(function (newval) {
      $('#slideTwo').attr("src", newval);
    });
  });
  
  wp.customize('slide_three', function (value) {
    value.bind(function (newval) {
      $('#slideThree').attr("src", newval);
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
