$(document).ready(() => {
    $(".menu-bar").click(() => {
        $(".nav-menu").removeClass("hidden");

        $(".nav-list_link").click(() => {
            $(".nav-menu").addClass("hidden");
        });
    })
   
    $(".menu-close").click(() => {
        $(".nav-menu").addClass("hidden");
    })

})