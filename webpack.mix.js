const mix = require("laravel-mix");
//
//mix.copy('images/', 'dist/images/', false);

mix.sass("resources/assets/sass/app.scss", "dist/css/all.css");
// mix.sass("resources/assets/sass/libs.scss", "dist/css/libs.css");

mix.js([
  "resources/assets/js/customization/theme-customize.js"
], "dist/js/theme-customize.js");
//
// mix.js([
//   "resources/assets/js/baseObject.js",
//   "resources/assets/js/nav/nav.js",
//   "resources/assets/js/carousel/carousel.js",
// //  "resources/assets/js/buttons/buttons.js",
//   "resources/assets/js/wpcf7/wpcf7.js",
//   "resources/assets/js/init.js"
// ], "dist/js/all.js");

mix.minify(['dist/css/all.css', 'dist/css/libs.css']);
mix.minify(['dist/js/theme-customize.js', 'dist/js/all.js']);
