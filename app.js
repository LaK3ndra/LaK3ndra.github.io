console.log("This script was loaded from external JS file")

// this is an alert
//alert("This is an alert!")

var name = window.prompt("Enter your name: ")
alert(`Hello ${name}!`)

// use document.getElementByID()
document.getElementById("name").innerHTML = "<h2>Hello " + name + "!</h2>"