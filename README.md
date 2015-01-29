# extract-css

> Extract the CSS from an HTML document.

## Install

Install with [npm](https://npmjs.org/package/extract-css)

```
npm install --save extract-css
```

## Usage

```js
var extractCss = require('extract-css');

extractCss(document, options, function (err, html, css) {
    console.log(html);
    console.log(css);
});
```

## API

### extractCss(html, options, callback)

#### options.applyStyleTags

Type: `Boolean`  
Default: `true`

Whether to inline styles in `<style></style>`.


#### options.applyLinkTags

Type: `Boolean`  
Default: `true`

Whether to resolve `<link rel="stylesheet">` tags and inline the resulting styles.


#### options.removeStyleTags

Type: `Boolean`  
Default: `true`

Whether to remove the original `<style></style>` tags after (possibly) inlining the css from them.


#### options.removeLinkTags

Type: `Boolean`  
Default: `true`

Whether to remove the original `<link rel="stylesheet">` tags after (possibly) inlining the css from them.


#### options.url

Type: `String`  
Default: `filePath`

How to resolve hrefs. Required.

#### options.preserveMediaQueries

Type: `Boolean`  
Default: `false`

Preserves all media queries (and contained styles) within `<style></style>` tags as a refinement when `removeStyleTags` is `true`. Other styles are removed.

## Credit

The code for this module was originally taken from the [Juice](https://github.com/Automattic/juice) library.

## License

MIT © [Jonathan Kemp](http://jonkemp.com)