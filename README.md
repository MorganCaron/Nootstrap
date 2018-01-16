# Nootstrap
Not Bootstrap: Sass Front-End Web Framework

[Demo](https://morgancaron.github.io/Nootstrap/example/)

![Noot](https://noot.space/noot.gif)

## Installation

### Sass/SCSS + Javascript

* Import nootstrap.sass file into your Sass/SCSS file
* Import [jQuery](https://code.jquery.com/)
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
* Import [jQuery](https://code.jquery.com/)
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

### Debug

* Import nootstrap-debug.min.css after importing nootstrap CSS

**HTML:**
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="css/nootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/nootstrap-debug.min.css">
  </head>
  <body>
    ...
  </body>
</html>
```

## Usage


### Activable

```html
<button class="btn toggleActive" activable="activable-1">Toggle .active class</button>
<button class="btn addActive" activable="activable-1">Add .active class</button>
<button class="btn removeActive" activable="activable-1">Remove .active class</button>
<p id="activable-1">Activable element</p>
```

### Button

```html
<a href="#" class="btn">Button 1</a>
<button class="btn">Button 2</button>
```

### Card

```html
<div class="card">
  <header>Title</header>
  <div class="card-body">
    Content
   </div>
   <footer>Footer</footer>
</div>
```

### Container

```html
<div class="container">
  Content
</div>
```

### Container Fluid

```html
<div class="container-fluid">
  Content
</div>
```

### Debug

```javascript
toggleDebug();
```

### Grid

```html
<div class="container">
  <div class="row">
    <div class="col-6">
      Col 1
    </div>
    <div class="col-6">
      Col 2
    </div>
  </div>
</div>
```

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

### Notification

```javascript
newNotification('text');
newNotification('<h1>text</h1>');
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
