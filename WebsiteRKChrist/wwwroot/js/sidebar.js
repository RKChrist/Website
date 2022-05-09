$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.sidenav').addClass("sticky");

        } else {
            $('.sidenav').removeClass("sticky");

            
        }

        // scroll-up button show/hide script
        if (this.scrollY > 125) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
};