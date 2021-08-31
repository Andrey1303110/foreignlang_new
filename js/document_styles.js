$(document).ready(function(){
    let normalWidth = $(".slider_11").css("width");
    $(".slider_12 video").css("width", normalWidth);
    $(".slider_12 video").css("transform", "translateY(-50%)");

    $('.head_div').hover(function(){
        $('#main_bg').css("filter", "opacity(0)");
    });
    $('.body_div').hover(function(){
        $('#main_bg').css("filter", "opacity(.075)");
    });
    function changeBG() {
        if (window.pageYOffset >= window.innerHeight) {
            let bg = ["english.jpg", "germany.jpg", "italy.jpg", "spain.jpg"];
            let i = Math.floor(Math.random() * 4);
            $('#main_bg').css("filter", "opacity(0)");
            $('#main_bg').css("background-image", "url(/img/bg/" + bg[i] + ")");
            $('#main_bg').css("filter", "opacity(.075)");
        }
    }
    setInterval(changeBG, 10000);
    changeBG();

    $(window).scroll(function(){
        if (window.pageYOffset < window.innerHeight) {
            $('#main_bg').css("filter", "opacity(0)");
        }
        if (window.pageYOffset > window.innerHeight) {
            $('#main_bg').css("filter", "opacity(.075)");
        }
    });

    $(".contact_icons").mouseenter(function(){
        this.src=this.src.replace("png","gif");
    })
    $(".contact_icons").mouseleave(function(){
        this.src=this.src.replace("gif","png");
    })
    $(".docx").each(function(){
        this.download = this.children[0].innerText + ".docx";
    });
    $(".adobe").each(function(){
        this.download = this.children[0].innerText + ".pdf";
    });
});