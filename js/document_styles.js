$(document).ready(function(){
    let normalWidth = $(".slider_11").css("width");
    $(".slider_div video").css("width", normalWidth);
    $(".slider_div video").css("transform", "translateY(-50%)");

    $('.head_div').hover(function(){
        $('#main_bg').css("filter", "opacity(0)");
    });
    $('.body_div').hover(function(){
        $('#main_bg').css("filter", "opacity(.075)");
    });
    function changeBG() {
        let bg = ["english.webp", "germany.webp", "italy.webp", "spain.webp"];
        let i = Math.floor(Math.random() * 4);
        $('#main_bg').css("background-image", "url(/img/bg/" + bg[i] + ")");
    }
    changeBG();
    setInterval(changeBG, 10000);

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