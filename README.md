# Nootstrap
Not Bootstrap: Sass Front-End Web Framework

![Demo](https://htmlpreview.github.io/?https://github.com/MorganCaron/Nootstrap/blob/master/example/index.html)

![Noot](https://noot.space/noot.gif)

## Installation

### Sass/SCSS + Javascript

* Import nootstrap.sass file into your Sass/SCSS file
* Import ![jQuery](https://code.jquery.com/)
* Import nootstrap.js file into your HTML `<head>` mark

**HTML:**
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/nootstrap.js"></script>
  </head>
  <body>
    ...
  </body>
</html>
```

**Sass** (style.sass):
```sass
@import nootstrap
```
or **SCSS** (style.scss):
```scss
@import "nootstrap";
```

### CSS + Javascript

* Import nootstrap.min.css file into your HTML `<head>` mark
* Import ![jQuery](https://code.jquery.com/)
* Import nootstrap.js file into your HTML `<head>` mark

**HTML:**
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="css/nootstrap.min.css">
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/nootstrap.js"></script>
  </head>
  <body>
    ...
  </body>
</html>
```

## Usage

### Navbar

```html
<nav class="navbar">
  <a href="#">Navbar Title</a>
  <ul class="navbar-nav">
    <li>Element 1</li>
    <li>Element 2</li>
    <li>Element 3</li>
  </ul>
  <span>Text right</span>
</nav>
```

### Button

```html
<a href="#" class="btn">Button 1</a>
<button class="btn">Button 2</button>
```

### Parallax

```html
<div class="parallax">
  <div class="parallax-background">
    <!-- background -->
  </div>
  <div class="parallax-content">
    <!-- content -->
  </div>
</div>
```
