'use strict'

var fs = require('fs')
var exec = require('child_process').exec

var bin = __dirname + '/bin/imagesnap '

module.exports = {
  capture: capture
}


// TODOs:
// rewrite this ugly pyramid with Q
// return correct err objects
// wrap exec

function capture(imagePath,params, callback) {
    // retrieve arguments as array
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
 
    // first argument is the imagePath
    // shift() removes the first item from the
    // array and returns it
    imagePath = args.shift();
 
    // last argument is the callback function.
    // pop() removes the last item in the array
    // and returns it
    callback = args.pop();
 
    // if args still holds items it's the params
    // add params to the bin
    if (args.length > 0){
      bin = bin +' '+ args.shift()+' ';
    }  
  fs.exists(imagePath, function(exists1) {
    if (exists1) {
      callback({error: 'File exists!'})
    } else {
      var dirPath = imagePath.replace(/\/[^\/]+$/, '')
      fs.exists(dirPath, function(exists2) {
        if (!exists2) {
          callback({error: 'Containing directory does not exists!'})
        } else {
          exec(bin + imagePath, function() { // (err, stdout, stderr)
            fs.exists(imagePath, function(exists3) {
              if (!exists3) {
                callback({error: 'Failed to create file!'})
              } else {
                callback(null)
              }
            })
          })
        }
      })
    }
  })
}