# imagesnapjs
## A nodejs wrapper for imagesnap
[imagesnap](https://github.com/rharder/imagesnap) is a tool for capturing webcam photos from the command line,
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


###As an npm dependency
#####Installation
```
$ npm install imagesnapjs
```
Or require it from your `package.json`
#####Usage
```
var imagesnapjs = require('imagesnapjs');

imagesnapjs.shoot('/Users/dany/image.jpg', function(err) {
  console.log(err ? err : 'Success!');
});
```

(To be further developed).

* * *
### Notes
* Using imageSnap v0.2.5

* * *
### Feedback
* If you enjoyed this tool, please star it on Github!
* I'd love to get any feedback you might have, to my email address, which is my username at gmail dot com, or through Github if it's about the technicalities.
* More material appreciation is welcome in the form of bitcoins. My address can be found on [this page](http://danyshaanan.com/bitcoin).
* Support and provide feedback for imageSnap itself from [imageSnap's page](http://www.iharder.net/current/macosx/imagesnap/).

