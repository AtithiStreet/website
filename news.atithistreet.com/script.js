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

let topNews = document.getElementById("topNews");

topNews.onclick= e => {
   getNews(e, topNews);
}

animate(topNews);

function getNews(e, element) {
  let googleStr = '';
  let fetched = e.target.innerText;
  let text = element.innerText;
  for(let i=0; i<fetched.length;i++){
    let ch = fetched.charAt(i);
    if(ch!==' ' ){
      googleStr += ch;
    }else{
      googleStr += '+';
    }
  }
  googleStr = googleStr.replace(/\s/g,'');
   if(fetched!==text){
    //window.location='https://google.com/search?q='+googleStr;
    window.location='/home/ansh/Documents/Projects/AtithiStreet/news/news1/news1.html';
   }
}

function animate(element){
    let elementWidth = element.offsetWidth;
    let flag = elementWidth;
    setInterval(() => {
        element.style.marginLeft = --flag + "px";
        if (2*elementWidth== -flag){
            flag = elementWidth;
        }
      }, 15);
}

