window.onscroll = function() {scrollMenu()};
var fixedMenu = document.getElementById("fixedMenu")


function scrollMenu() {
    
    if (document.body.scrollTop > 600 || 
        document.documentElement.scrollTop > 600 ) {

            fixedMenu.style.top = '0px';
        
    } else {
        
        fixedMenu.style.top = '-100px'
        
    }
}