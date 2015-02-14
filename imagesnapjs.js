'use strict'

var fs = require('fs')
var exec = require('child_process').exec

module.exports = {
  capture: capture
}

function parseCommand(options, imagePath) {
  var parts = [__dirname + '/bin/imagesnap']
  if (options.cliflags) {
    parts.push(options.cliflags)
  }
  parts.push(imagePath)
  return parts.join(' ')
}

// TODOs:
// rewrite this ugly pyramid with Q
// return correct err objects
// wrap exec

function capture(imagePath, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = {}
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
          var command = parseCommand(options, imagePath)
          // console.log(command)
          exec(command, function() { // (err, stdout, stderr)
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
