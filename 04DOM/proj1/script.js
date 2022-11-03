var counter = document.querySelector('.counter');
var followers = document.querySelector('.followers');
var background = document.querySelector('.brown')

let changer= 1;
let count = 1;
let bgColor = 'yellow'
let bgColord = 'brown'


setInterval(() => {
  if (changer < 1) {
   changer += 0.5;
   // counter.innerText = count;
   background.className = bgColor
  } else {
   changer = 0;
   background.className = bgColord
  }
}, 240);


setInterval(() => {
  if (count < 1000) {
    count += 1;
    counter.innerText = count;
  } else {
    count = 0
  };
}, 60);