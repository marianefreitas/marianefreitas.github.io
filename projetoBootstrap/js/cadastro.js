


// JavaScript: validações.


$(document).ready(function () {
    var flag = []
    $("#nome").blur(function () {
        var nome = valida = aux = regex = 0;
        var teste = -1;
        nome = $("#nome").val()
        nome = nome.replace(/\s/g, '');
        regex = /[^a-zA-Z0-9]/;
        teste = (nome.search(regex));

        for (i = 0; i < nome.length; i++) {
            aux = (isNaN(nome[i]))
            if (aux == false)
                valida++
        }
        if (valida > 0 || teste >= 0 || nome == "") {
            $("#nome").css({ border: "red solid 3px" })
            flag[0] = 0
        }
        else {
            $("#nome").css({ border: "#008000 solid 5px" })
            flag[0] = 1
        }
    })


    $("#email").blur(function () {
        var usuario = dominio = 0;
        usuario = $(this).val().substring(0, $(this).val().indexOf("@"));
        dominio = $(this).val().substring($(this).val().indexOf("@") + 1, $(this).val().length);
        if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") == -1) && (dominio.search("@") == -1) && (usuario.search(" ") == -1) &&
            (dominio.search(" ") == -1) && (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
            $("#email").css({ border: "#008000 solid 5px" })
            flag[1] = 1
        }
        else {
            $("#email").css({ border: "red solid 3px" })
            flag[1] = 0
        }
    })

    $("#celular").blur(function () {
        var numero = regex = 0;
        var teste = -1;
        numero = $(this).val()
        numero = numero.replace(/\.|-/g, "");
        numero = numero.replace(/\s/g, '');
        regex = /[^a-zA-Z0-9]/;
        teste = (numero.search(regex));
        if ((numero.length == 9) && (teste == -1) && (!(isNaN(numero)))) {
            $("#celular").css({ border: "#008000 solid 5px" })
            flag[2] = 1
        } else {
            $("#celular").css({ border: "red solid 3px" })
            flag[2] = 0
        }
    })
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    formulario.addEventListener('submit', function (event) {
        if (flag.some(element => element == 0)) {
            alert("Confira suas informações\nSeu cadastro não foi realizado")
            event.preventDefault();
            event.stopPropagation();
        } else {
            formulario.classList.add('was-validated');
            alert("Todas as informações estão corretas\nSeu cadastro será realizado")
            flag = 0
        }
    });
});

