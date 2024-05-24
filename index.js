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