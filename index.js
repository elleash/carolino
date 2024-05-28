// setting up functions for revealing content horizontally and vertically
window.addEventListener('scroll', revealhoriz);
//preforming the reveal selector in css
function revealhoriz(){
    // declaring a variable
    //returns the reveal selector
    var reveals = document.querySelectorAll ('.revealhoriz');
    for(var i = 0; i < reveals.length; i++){
        // reveals the contents
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 200;
        // reveals the content on a certain height
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('show');
        }
        // unreveals the content on a certain height
        else{
            reveals[i].classList.remove('show');
        }
    }
}

window.addEventListener('scroll', revealvert);
//preforming the reveal selector in css
function revealvert(){
    // declaring a variable
    //returns the reveal selector
    var reveals = document.querySelectorAll ('.revealvert');
    // loops the dark mode
    for(var i = 0; i < reveals.length; i++){
        // reveals the contents
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 200;
        // reveals the content on a certain height
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('show');
        }
        // unreveals the content on a certain height
        else{
            reveals[i].classList.remove('show');
        }
    }
}

// This is for the chatbot's minimize/maximise feature
const chatbotButton = document.getElementById("chatbot-button");


chatbotButton.addEventListener("click", ()=>{
    const chatbotItself = document.querySelector(".chatbot-itself");
   
    if (chatbotButton.textContent === "-"){
        chatbotItself.style.display = "none";
        chatbotButton.textContent = "+";
        chatbotButton.style.top = "-1rem";

    }

    else{
        chatbotItself.style.display = "block";
        chatbotButton.textContent = "-";
        chatbotButton.style.top = ".5rem";
    }
    
})

var images = ["img/section-two/aboutPot.png", "img/section-two/aboutPot2.png"]
var index = 0;

setInterval (function(){

  document.getElementById("pot").src = images[index];
  index++;

  if (index == images.length) {
    index = 0;
  }
}, 1000);