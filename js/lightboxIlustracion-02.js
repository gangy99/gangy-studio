//Lightbox proyecto 05 ------------------------------------------------------

// Open the Modal 05 
function openModal05() {
    document.getElementById("myModal05").style.display = "block";
  }
  
  // Close the Modal 05
  function closeModal05() {
    document.getElementById("myModal05").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides05(slideIndex);
  
  // Next/previous controls 05
  function plusSlides05(n) {
    showSlides05(slideIndex += n);
  }
  
  // Thumbnail image controls 05
  function currentSlide05(n) {
    showSlides05(slideIndex = n);
  }
  
  function showSlides05(n) {
    var i;
    var slides05 = document.getElementsByClassName("mySlides05");
    var dots05 = document.getElementsByClassName("demo05");
    var captionText05 = document.getElementById("caption05");
    if (n > slides05.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides05.length}
    for (i = 0; i < slides05.length; i++) {
      slides05[i].style.display = "none";
    }
    for (i = 0; i < dots05.length; i++) {
      dots05[i].className = dots05[i].className.replace(" active", "");
    }
    slides05[slideIndex-1].style.display = "flex";
    dots05[slideIndex-1].className += " active";
    captionText05.innerHTML = dots05[slideIndex-1].alt;
  }
  
  
  
  //Lightbox proyecto 06 ------------------------------------------------------
  
  // Open the Modal 06 
  
  function openModal06() {
    document.getElementById("myModal06").style.display = "block";
  }
  
  // Close the Modal 06
  function closeModal06() {
    document.getElementById("myModal06").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides06(slideIndex);
  
  // Next/previous controls
  function plusSlides06(n) {
    showSlides06(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide06(n) {
    showSlides06(slideIndex = n);
  }
  
  function showSlides06(n) {
    var i;
    var slides06 = document.getElementsByClassName("mySlides06");
    var dots06 = document.getElementsByClassName("demo06");
    var captionText06 = document.getElementById("caption06");
    if (n > slides06.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides06.length}
    for (i = 0; i < slides06.length; i++) {
      slides06[i].style.display = "none";
    }
    for (i = 0; i < dots06.length; i++) {
      dots06[i].className = dots06[i].className.replace(" active", "");
    }
    slides06[slideIndex-1].style.display = "flex";
    dots06[slideIndex-1].className += " active";
    captionText06.innerHTML = dots06[slideIndex-1].alt;
  }
  
  //Lightbox proyecto 07 ------------------------------------------------------
  
  // Open the Modal 07 
  
  function openModal07() {
    document.getElementById("myModal07").style.display = "block";
  }
  
  // Close the Modal 07
  function closeModal07() {
    document.getElementById("myModal07").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides07(slideIndex);
  
  // Next/previous controls
  function plusSlides07(n) {
    showSlides07(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide07(n) {
    showSlides07(slideIndex = n);
  }
  
  function showSlides07(n) {
    var i;
    var slides07 = document.getElementsByClassName("mySlides07");
    var dots07 = document.getElementsByClassName("demo07");
    var captionText07 = document.getElementById("caption07");
    if (n > slides07.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides07.length}
    for (i = 0; i < slides07.length; i++) {
      slides07[i].style.display = "none";
    }
    for (i = 0; i < dots07.length; i++) {
      dots07[i].className = dots07[i].className.replace(" active", "");
    }
    slides07[slideIndex-1].style.display = "flex";
    dots07[slideIndex-1].className += " active";
    captionText07.innerHTML = dots07[slideIndex-1].alt;
  }

    //Lightbox proyecto 08 ------------------------------------------------------
  
  // Open the Modal 08 
  
  function openModal08() {
    document.getElementById("myModal08").style.display = "block";
  }
  
  // Close the Modal 08
  function closeModal08() {
    document.getElementById("myModal08").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides08(slideIndex);
  
  // Next/previous controls
  function plusSlides08(n) {
    showSlides08(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide08(n) {
    showSlides08(slideIndex = n);
  }
  
  function showSlides08(n) {
    var i;
    var slides08 = document.getElementsByClassName("mySlides08");
    var dots08 = document.getElementsByClassName("demo08");
    var captionText08 = document.getElementById("caption08");
    if (n > slides08.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides08.length}
    for (i = 0; i < slides08.length; i++) {
      slides08[i].style.display = "none";
    }
    for (i = 0; i < dots08.length; i++) {
      dots08[i].className = dots08[i].className.replace(" active", "");
    }
    slides08[slideIndex-1].style.display = "flex";
    dots08[slideIndex-1].className += " active";
    captionText08.innerHTML = dots08[slideIndex-1].alt;
  }