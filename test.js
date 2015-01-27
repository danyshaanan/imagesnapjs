'use strict'

var imagesnapjs = require('./imagesnapjs.js')

imagesnapjs.capture(process.cwd() + '/test.jpg', function(error) {
  if (error) {
    console.log(error)
  } else {
    console.log('snapshot taken.')
  }
})
