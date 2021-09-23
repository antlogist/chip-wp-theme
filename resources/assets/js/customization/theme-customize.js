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
  
  wp.customize('front_page_tagline', function (value) {
    value.bind(function (newval) {
      $('#tagline').html(newval);
    });
  });
  
  wp.customize('address', function (value) {
    value.bind(function (newval) {
      $('#address').html(newval);
    });
  });
  
  wp.customize('postal_address', function (value) {
    value.bind(function (newval) {
      $('#postalAddress').html(newval);
    });
  });
  
  wp.customize('about_page_id', function (value) {
    value.bind(function (newval) {
      $('#openModalAbout').data('page_id', newval);
    });
  });
  
  wp.customize('products_page_id', function (value) {
    value.bind(function (newval) {
      $('#openModalProducts').data('page_id', newval);
    });
  });
})(jQuery);
