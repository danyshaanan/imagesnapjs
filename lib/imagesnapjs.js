'use strict'

var fs = require('fs')
var exec = require('child_process').exec

var bin = __dirname + '/../bin/imagesnap '

module.exports = {
  capture: capture
}


// TODOs:
// rewrite this ugly pyramid with Q
// return correct err objects
// wrap exec

function capture(imagePath, callback) {
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
