## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 3

const clock = document.getElementById('clock');

setInterval(function () { 


  let date = new Date();

  //  console.log(date.toLocaleTimeString());

  clock.innerHTML = date.toLocaleTimeString();
  
}, 1000);