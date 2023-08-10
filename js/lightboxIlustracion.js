//Lightbox proyecto 01 ------------------------------------------------------

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
  
  
  
  //Lightbox proyecto 02 ------------------------------------------------------
  
  // Open the Modal 02 
  
  function openModal02() {
    document.getElementById("myModal02").style.display = "block";
  }
  
  // Close the Modal 02
  function closeModal02() {
    document.getElementById("myModal02").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides02(slideIndex);
  
  // Next/previous controls
  function plusSlides02(n) {
    showSlides02(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide02(n) {
    showSlides02(slideIndex = n);
  }
  
  function showSlides02(n) {
    var i;
    var slides02 = document.getElementsByClassName("mySlides02");
    var dots02 = document.getElementsByClassName("demo02");
    var captionText02 = document.getElementById("caption02");
    if (n > slides02.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides02.length}
    for (i = 0; i < slides02.length; i++) {
      slides02[i].style.display = "none";
    }
    for (i = 0; i < dots02.length; i++) {
      dots02[i].className = dots02[i].className.replace(" active", "");
    }
    slides02[slideIndex-1].style.display = "flex";
    dots02[slideIndex-1].className += " active";
    captionText02.innerHTML = dots02[slideIndex-1].alt;
  }
  
  //Lightbox proyecto 03 ------------------------------------------------------
  
  // Open the Modal 03 
  
  function openModal03() {
    document.getElementById("myModal03").style.display = "block";
  }
  
  // Close the Modal 03
  function closeModal03() {
    document.getElementById("myModal03").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides03(slideIndex);
  
  // Next/previous controls
  function plusSlides03(n) {
    showSlides03(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide03(n) {
    showSlides03(slideIndex = n);
  }
  
  function showSlides03(n) {
    var i;
    var slides03 = document.getElementsByClassName("mySlides03");
    var dots03 = document.getElementsByClassName("demo03");
    var captionText03 = document.getElementById("caption03");
    if (n > slides03.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides03.length}
    for (i = 0; i < slides03.length; i++) {
      slides03[i].style.display = "none";
    }
    for (i = 0; i < dots03.length; i++) {
      dots03[i].className = dots03[i].className.replace(" active", "");
    }
    slides03[slideIndex-1].style.display = "flex";
    dots03[slideIndex-1].className += " active";
    captionText03.innerHTML = dots03[slideIndex-1].alt;
  }

    //Lightbox proyecto 04 ------------------------------------------------------
  
  // Open the Modal 04 
  
  function openModal04() {
    document.getElementById("myModal04").style.display = "block";
  }
  
  // Close the Modal 03
  function closeModal04() {
    document.getElementById("myModal04").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides04(slideIndex);
  
  // Next/previous controls
  function plusSlides04(n) {
    showSlides04(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide04(n) {
    showSlides04(slideIndex = n);
  }
  
  function showSlides04(n) {
    var i;
    var slides04 = document.getElementsByClassName("mySlides04");
    var dots04 = document.getElementsByClassName("demo04");
    var captionText04 = document.getElementById("caption04");
    if (n > slides04.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides04.length}
    for (i = 0; i < slides04.length; i++) {
      slides04[i].style.display = "none";
    }
    for (i = 0; i < dots04.length; i++) {
      dots04[i].className = dots04[i].className.replace(" active", "");
    }
    slides04[slideIndex-1].style.display = "flex";
    dots04[slideIndex-1].className += " active";
    captionText04.innerHTML = dots04[slideIndex-1].alt;
  }