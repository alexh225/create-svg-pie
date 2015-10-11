get-dataurl
===========
[![Build Status](https://travis-ci.org/janjarfalk/get-dataurl.svg?branch=master)](https://travis-ci.org/janjarfalk/get-dataurl)

Get base64 encoded data url from image.

## Installation
```
npm install get-dataurl --save
```

## Usage
```
import getDataUrl from 'get-dataurl';
getDataUrl('image.png', (dataUrl) => {
  console.log(dataUrl);
});
```


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 1.0.0 Initial release

## Todo
- Create useful tests