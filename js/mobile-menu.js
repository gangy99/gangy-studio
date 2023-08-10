var mobileMenuList = document.getElementById("mobileMenuList");
var btnMenu = document.getElementById("btnMenu");

function openNav() {

    if (btnMenu.onclick) {
        mobileMenuList.style.left = "0%";
    } 
    
}

function closeNav() {
    mobileMenuList.style.left = "-100%";
  }