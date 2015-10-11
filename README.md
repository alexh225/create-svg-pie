get-dataurl
===========
[![Build Status](https://travis-ci.org/janjarfalk/create-svg-pie.svg?branch=master)](https://travis-ci.org/janjarfalk/create-svg-pie)

Create a SVG pie chart from number array.

## Installation
```
npm install create-svg-pie --save
```

## Usage
```
import createSVGPie from 'create-svg-pie';

const values = [5, 10, 15];
const radius = 100;

const pie = createSVGPie(values, pie);

document.body.appendChild(pie);
```


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 1.0.0 Initial release

## Todo
- Create useful tests