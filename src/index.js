var React = require("react");
//you an use   - import React from "react"
var ReactDom = require("react-dom");

const d = new Date();
const year = d.getFullYear();

//render what and where
ReactDom.render(<h1>Hello World</h1>, document.getElementById("root"));

// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World";
// document.getElementById("root").appendChild(h1);
const name = "Dhanaraj";
ReactDom.render(
  <div>
    <p>Hello Worldss</p>
  </div>,
  document.getElementById("root")
);

ReactDom.render(
  <div>
    <h1>Hello , {name}</h1>
    <h1>FirstApp...</h1>
    <ul>
      <li>item1</li>
      <li>item2</li>
    </ul>
    <p>created by {name}</p>
    <p> copy right {year} </p>
  </div>,
  document.getElementById("root")
);

//notes:
//react dom
// react render can accept only one tag as what to show, if u want multiple
// tag to be displayed, then just wrap arounf some tags like div
//babel - js compiler

//interpreting the varibal(expression), cnt be statement inside the html tag,  using the curly braces
//expression vs statement

//instead of class attribute as className, because even though we embed the
// html code into the JS, it is compiled to plane js at by the compiler.
// so instead of class , use the javaScript way of getting the class
// element.className
