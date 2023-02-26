$(document).ready(() => {
    $(".menu-bar").click(() => {
        $(".nav-menu").removeClass("hidden");
    })
   
    $(".menu-close").click(() => {
        $(".nav-menu").addClass("hidden");
    })

    $(".nav-menu .nav-list_link").each((i, value) => {
        $(value).click(() => {
            // $(".nav-menu .nav-list_link").each((i, val) => {
            //     $(val).removeClass("active");
            // });
            $(".nav-menu").addClass("hidden");
            // $(value).addClass("active");
        });
    })

    $(".nav-list .nav-list_link").each((i, value) => {
        $(value).click(() => {
            $(".nav-list .nav-list_link").each((i, val) => {
                $(val).removeClass("active");
            });
            $(value).addClass("active");
        });
    })
})

const section = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-list .nav-list_link");

document.addEventListener("scroll", () => {
    section.forEach((el, i) => {
        if(el.getBoundingClientRect().top <= 0){        
            
            links.forEach((el, j) =>{
                el.classList.remove("active");
            })
            
            links[i].classList.add("active");
        
        }
    })
});

