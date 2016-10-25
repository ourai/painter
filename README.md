# Trick

This project is an extension, a set of helpers, for [Compass](http://compass-style.org), which aims to make Compass more powerfull.

## Usage

Install with Bower.

```bash
bower install --save trick-0.4.1=ourai/trick#0.4.1
```

Trick depends on the mixins part of Compass, so you need to import Compass or the pure mixins from [compass-mixins](https://github.com/Igosuki/compass-mixins) manually.

```scss
// Import the Ruby version Compass directly
@import "compass";

// or import only the mixins part
@import "../bower_components/compass-mixins-0.12.10/lib/compass";
@import "../bower_components/compass-mixins-0.12.10/lib/compass/layout";
@import "../bower_components/compass-mixins-0.12.10/lib/animation/core";
```

Then import Trick to your project.

```scss
@import "../bower_components/trick-0.4.1/trick";
```
