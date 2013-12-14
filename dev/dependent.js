"use strict";

var imagesnapjs = require('imagesnapjs');

imagesnapjs.shoot('/Users/dany/image.jpg', function(err) {
  console.log(err ? err : 'Success!');
});
