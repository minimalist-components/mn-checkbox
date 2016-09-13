# Minimalist input checkbox

Minimalist input checkbox component, agnostic to framworks.

See the [demo](http://codepen.io/darlanmendonca/full/xEwkaz)

<!-- [![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-checkbox/master/sources/example/mn-checkbox.gif)](http://codepen.io/darlanmendonca/full/akgXQq)  -->

### Install

With bower

```sh
bower install --save mn-checkbox
```

Or just download the main files ```dist/mn-checkbox.css, dist/mn-checkbox.js``` in your project, and make a reference to their, like:

```html
<link rel="stylesheet" href="path/to/dist/mn-checkbox.css">
<script src="path/to/dist/mn-checkbox.css"></script>
```

### Usage

And then, in your html, you can use the tag ```mn-checkbox``` i.e.

```html
<mn-checkbox label="Status"></mn-checkbox>
```

Custom attributes

- label - custom attribute, to define the text visible for checkbox, like example above

The following attributes from input type checkbox are supported in this component


- [autofocus](http://www.w3schools.com/tags/att_input_autofocus.asp)
- [checked](http://www.w3schools.com/tags/att_input_checked.asp)
- [disabled](http://www.w3schools.com/tags/att_input_disabled.asp)
- [name](http://www.w3schools.com/tags/att_input_name.asp)
