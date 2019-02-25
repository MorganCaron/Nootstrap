# Nootstrap
Not Bootstrap: Sass Front-End Web Framework

[Demo](https://morgancaron.github.io/Nootstrap/)
[Source](https://github.com/MorganCaron/Nootstrap)

![Noot](https://noot.space/noot.gif)

## Installation


### Sass/SCSS + Javascript

* Import nootstrap.sass file into your Sass/SCSS file
* Import nootstrap.min.js file into your HTML `<head>` mark

**HTML:**
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="yourStyle.min.css">
    <script type="text/javascript" src="nootstrap.min.js"></script>
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

## Usage

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
