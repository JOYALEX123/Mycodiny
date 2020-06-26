console.log("app.js JavaScript included !");
var frameworksList = document.getElementById('frameworks');
var newFramework = document.createElement('li');
newFramework.innerText = "Apache Royale";
frameworksList.appendChild(newFramework);
frameworksList.lastChild.style.color = "crimson";