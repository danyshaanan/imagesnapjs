# imagesnapjs

[![Build Status](https://travis-ci.org/danyshaanan/imagesnapjs.png)](https://travis-ci.org/danyshaanan/imagesnapjs)
[![NPM Version](https://img.shields.io/npm/v/imagesnapjs.svg?style=flat)](https://npmjs.org/package/imagesnapjs)
[![License](http://img.shields.io/npm/l/imagesnapjs.svg?style=flat)](LICENSE)

## An npm/nodejs wrapper for imagesnap
[imagesnap](https://github.com/rharder/imagesnap) is an OSX tool for capturing webcam photos from the command line,
written by [Robert Harder](https://github.com/rharder). (Thanks!)

imagesnapjs is first a wrapper, for making imagesnap installation as easy as `npm i -g imagesnapjs`,
and second, an npm dependency for capturing webcam shots from nodejs applications.

* * *
###As a command line tool
#####Installation
```
$ npm install -g imagesnapjs
```
#####Usage
see [the original documentation](https://github.com/rharder/imagesnap) or just type `imagesnap -h`.

* * *
###As an npm dependency
#####Installation
```
$ npm install imagesnapjs
```
Or require it from your `package.json`
#####Usage
```
var imagesnapjs = require('imagesnapjs');

imagesnapjs.capture('/Users/dany/image.jpg', function(err) {
  console.log(err ? err : 'Success!');
});
```

#####Usage with an optional paramameters
```
var imagesnapjs = require('imagesnapjs');

imagesnapjs.capture('/Users/dany/image.jpg','-w 2 ', function(err) {
  console.log(err ? err : 'Success!');
});

only tested with -w option that enable a warm up before taking a picture.

```


(To be further developed).

* * *
### Notes
* this is OSX specific! execution of the binary will fail on other systems.
* Using imageSnap v0.2.5

* * *
### Feedback
* If you enjoyed this package, please star it [on Github](https://github.com/danyshaanan/imagesnapjs).
* You are invited to [Open an issue on Github](https://github.com/danyshaanan/imagesnapjs/issues).
* For other matters, my email address can be found on my [NpmJS page](https://www.npmjs.org/~danyshaanan), my [Github page](https://github.com/danyshaanan), or my [website](http://danyshaanan.com/).
* Provide feedback or support for imageSnap itself from [imageSnap's page](http://www.iharder.net/current/macosx/imagesnap/).
