# apple-mapkit-js
An NPM installable package of Apple's Mapkit JS Version 5.4.0

Run `npm install --save apple-mapkit-js` to add this package as a dependency of your project. Then, somewhere in your app, import `apple-mapkit-js`. ( vis. `import 'apple-mapkit-js';` or `require('apple-mapkit-js')` ). Doing so will create a `mapkit` object in your app's global scope. This object is the same object you would get if you included the following script tag somewhere in a webpage:

```html
<script src="https://cdn.apple-mapkit.com/mk/5.4.0/mapkit.js"></script>
```

However, npm installing this script into your app allows you to use a tool like Webpack to bake Apple Mapkit JS into your app without first sending an HTTP GET request to Apple's CDN--making your app a little faster to load in browser.
