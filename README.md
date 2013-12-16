# imagesnapjs
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

(To be further developed).

* * *
### Notes
* this is OSX specific! execution of the binary will fail on other systems.
* Using imageSnap v0.2.5

* * *
### Feedback
* If you enjoyed this tool, please star it on Github!
* I'd love to get any feedback you might have! Mail me at danyshaanan@gmail.com, or [open an issue](https://github.com/danyshaanan/imagesnapjs/issues/new).
* More material appreciation is welcome in the form of bitcoins. My address can be found on [this page](http://danyshaanan.com/bitcoin).
* Provide feedback or support for imageSnap itself from [imageSnap's page](http://www.iharder.net/current/macosx/imagesnap/).

