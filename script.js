$(document).ready(() => {
    $(".menu-bar").click(() => {
        $(".nav-menu").removeClass("hidden");
    })
   
    $(".menu-close").click(() => {
        $(".nav-menu").addClass("hidden");
    })
})