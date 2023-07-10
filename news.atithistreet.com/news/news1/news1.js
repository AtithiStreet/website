window.onscroll = function() {stickBox()};


let myBox = document.getElementById("myBox");
let sticky = myBox.offsetTop;

function stickBox() {
  if (window.scrollY > sticky) {
    myBox.classList.add("sticky");
  } else {
    myBox.classList.remove("sticky");
  }
}

