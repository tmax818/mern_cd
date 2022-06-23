# Readings

## JavaScript

### Course Overview

- [ ] Intro to MERN

### Node

#### Intro to Node

>Node.js is a powerful and flexible JavaScript interpreter, capable of letting us run JavaScript code free from our browser, using our computer's native hardware.

#### [Installation](https://login.codingdojo.com/m/130/6459/46082)

#### [Running JavaScript](https://login.codingdojo.com/m/130/6459/45658)



### Fundamentals

#### [Overview](https://login.codingdojo.com/m/130/6412/45585)

#### [ECMAScript](https://login.codingdojo.com/m/130/6412/45660)

#### [Debugging](https://login.codingdojo.com/m/130/6412/45698)

>Syntax Errors happen when the parser finds invalid JavaScript.

#### [Scope](https://login.codingdojo.com/m/130/6412/45694)

>**Scope** is the visibility, or accessibility of information, such as variables and functions, to a particular section of code. JavaScript is *function scoped* and traditionally has two types of scope: global and local. New scopes are created by defining functions.

```js
var beatles = ['Paul', 'George', 'John', 'Ringo'];

function printNames(names) {

  function actuallyPrintingNames() {

    for (var index = 0; index < names.length; index++) {
      var name = names[index];
  
      console.log(name + ' was found at index ' + index);
    }
    
    console.log('name and index after loop is ' + name + ':' + index);
  }

  actuallyPrintingNames();

}

printNames(beatles);
                     
```

### OOP

### Functional Programming

### NPM

- [Node Package Manager](./nodePackageManager/README.md)

