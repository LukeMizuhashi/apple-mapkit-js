# apple-mapkit-js
An NPM installable package of Apple's Mapkit JS Version 5.4.0

Run `npm install --save apple-mapkit-js` to add this package as a dependency of your project. Then, somewhere in your app, import `apple-mapkit-js`. ( vis. `import 'apple-mapkit-js';` or `require('apple-mapkit-js')` ). Doing so will create a `mapkit` object in your app's global scope. This object is the same object you would get if you included the following script tag somewhere in a webpage:

```html
<script src="https://cdn.apple-mapkit.com/mk/5.4.0/mapkit.js"></script>
```

However, npm installing this script into your app allows you to use a tool like Webpack to bake Apple Mapkit JS into your app without first sending an HTTP GET request to Apple's CDN--making your app a little faster to load in browser.

## Load specific Versions of Mapkit JS

To load a specific version of Mapkit JS, `require(apple-mapkit-js/ver/5.29.0/mapkit.js)` it. See the `ver/` directory in this repo for which versions of Mapkit JS are available.

## Contains Method
If you include the `apple-mapkit-js/contains.js` file in this repo after including the main `apple-mapkit-js` module, all of the region-like objects included with Apple Mapkit JS will be decorated with a prototype function `contains(point)`.

All of these functions take in a point-like object as their first and only argument--and return whether or not that point is contained by the given region.

For example:

```JavaScript
require('apple-mapkit-js');
require('apple-mapkit-js/contains');

var map = new mapkit.Map();

map.contains(point);                 // Returns true if point is in map's visible region.
map.region.contains(point);          // Returns true if point is in region.
map.visibleRectArea.contains(point); // Returns true if point is in MapRect.
```

where `point` above can be an instance of `mapkit.MapPoint`, `mapkit.Coordinate`, a map-point literal of the form `{ x: Number, y: Number }`, or a coordinate literal of form `{ latitude: Number, longitude: Number }`.
