# closures

# JavaScript All-In-One For Dummies

A program that demonstrates how to use the onfocus in javascipt to populate varrying text into a div in html.

1. make sure to have the following code inserted into your file, and name the file "closures.html"

```html
<html>
  <head>
    <script type="text/javascript" src="closures.js"></script>
    <title>closures</title>
  </head>
  <body onload="setUpHelp()">
    <h1>javascript closures part 2</h1>
    <p id="hints"></p>
    Email:<input type="text" id="email" /><br />
    Name:<input type="text" id="name" /><br />
    Age:<input type="text" id="age" />

    <div></div>
  </body>
</html>
```

2. the script will change the help text above the input fields depending on which field is clicked
