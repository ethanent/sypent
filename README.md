<p align="center" style="text-align: center"><img src="https://raw.githubusercontent.com/ethanent/sypent/master/media/logo-core.png" width="250" alt="sypent logo"/></p>

> Ultra-light JS DOM manipulation library

[GitHub](https://github.com/ethanent/sypent) | [NPM](https://www.npmjs.com/package/sypent)

## Install

```shell
npm i sypent
```

And include the library.

```html
<script src="sypent.min.js"></script>
```

## Why sypent?

sypent is awesome because it's simple and so useful.

It's also very lightweight. Like &lt;0.5K unminified lightweight.

## Usage

Let's create a `div` with class 'message' with a text node child.

```js
let addDiv = sy('div', {'class': 'message'}, ['This is a text node.'])
```

Now let's create a `p` tag with text nested inside of a div.

```js
let complex = sy('div', {}, [
	sy('p', {}, ['Hey there.'])
])
```

## In detail

sy(String `tagName`, ?Object `attributes`, ?Array[HTMLElement | String | DocumentFragment] `children`)

`tagName` - Tag of generated element.

*optional* `attributes` - Attributes for generated element. Default: `{}`

*optional* `children` - Children (elements) of generated element. May also contain strings, which will be made into text nodes. Default: `[]`