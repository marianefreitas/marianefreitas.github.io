


// "scroll" que a partir de  400px do topo do body apareça uma seta ao lado direito da pagina que funciona como retorno suave para o inicio da pagina -> linha 6

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 400) {
            $("#botao").css({ display: "block" });
        } else {
            $("#botao").css({ display: "none" });
        }
    });
    // função smooth
    $("#smooth").on("click", function () {
        if (this.hash !== "") {
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 3000, function () {
                window.location.hash = hash;
            });
        }
    });
});












