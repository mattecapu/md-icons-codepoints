# Material Design Icons Codepoints JSON

A JSON object for using [material design icon font](http://google.github.io/material-design-icons/#icon-font-for-the-web).

## Install
The `npm`-way
```
npm i md-icons-codepoints --save
```

## Usage
Just get them from the exported JSON object

```js
import icons from 'md-icons-codepoints';

const myWiFiIcon = `<i class="material-design-icons">${icons.wifi}</i>`;

```
**All codepoints are exported as Unicode chars**, so be sure to provide the correct charset to your HTML file. The icon font will do the rest.

If you want to use them as HTML entities, it's easy:
```js
function toHTMLHexEntity(icon) {
	return `&#x${icon.codePointAt(0)};`;
}
```

## License
ISC
