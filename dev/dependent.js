"use strict";

var imagesnapjs = require('imagesnapjs');

imagesnapjs.capture('/Users/dany/image.jpg', function(err) {
  console.log(err ? err : 'Success!');
});
