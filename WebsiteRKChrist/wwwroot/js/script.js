
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


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.sidebar .nav-link').forEach(function (element) {

        element.addEventListener('click', function (e) {

            let nextEl = element.nextElementSibling;
            let parentEl = element.parentElement;

            if (nextEl) {
                e.preventDefault();
                let mycollapse = new bootstrap.Collapse(nextEl);

                if (nextEl.classList.contains('show')) {
                    mycollapse.hide();
                } else {
                    mycollapse.show();
                    // find other submenus with class=show
                    var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                    // if it exists, then close all of them
                    if (opened_submenu) {
                        new bootstrap.Collapse(opened_submenu);
                    }
                }
            }
        }); // addEventListener
    }) // forEach
});
// DOMContentLoaded  end