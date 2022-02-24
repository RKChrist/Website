
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            
        }else{
            $('.navbar').removeClass("sticky");
            
            // var dropdowns = document.getElementsByClassName("dropdown-content");
            // var i;
            // for (i = 0; i < dropdowns.length; i++) {
            //   var openDropdown = dropdowns[i];
            //   if (openDropdown.classList.contains('navbarDropdown')) {
            //     openDropdown.classList.remove('navbarDropdown');
            //   }
            // }
        }
        if (this.scrollY > 20){
            var dropdown = document.getElementById("myDropdown");
            if(!dropdown.classList.contains("navbarDropdown")){
                document.getElementById("myDropdown").classList.toggle("navbarDropdown");
            }
            
        }
        else{
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                  var openDropdown = dropdowns[i];
                  if (openDropdown.classList.contains('navbarDropdown')) {
                    openDropdown.classList.remove('navbarDropdown');
                  }
            }
        }

        // scroll-up button show/hide script
        if(this.scrollY > 125){
            $('.scroll-up-btn').addClass("show");      
        }else{
            $('.scroll-up-btn').removeClass("show");       
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["BackEnd Developer", "Uddannet Brandmand", "Studerende"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["BackEnd Developer", "Uddannet Brandmand", "Studerende"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("dropdownShow");

  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('dropdownShow')) {
          openDropdown.classList.remove('dropdownShow');
        }
      }
    }
  }