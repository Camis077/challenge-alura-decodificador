    const textArea = document.querySelector(".container__areatexto");
    const mensagem = document.querySelector(".container__mensagem");
    const btnCopiar = document.querySelector(".btn-copiar");
    const mensagemCopiada = document.getElementById("mensagem-copiada");


    textArea.addEventListener("input", function(e) {
        let valorFiltrado = e.target.value
            .normalize("NFD") 
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-zA-Z\s]/g, "");
    
        e.target.value = valorFiltrado;
    });
    
    function btnEncriptar() {
        const textoEncriptado = encriptar(textArea.value);
        mensagem.value = textoEncriptado;
        textArea.value = "";
        
    }


    function btnDesencriptar() {
        const textoDesencriptado = desencriptar(textArea.value);
        mensagem.value = textoDesencriptado;
        textArea.value = "";
    }

    function encriptar(stringEncriptada) {
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase();
    
        for(let i = 0; i < matrizCodigo.length; i++) {
            if(stringEncriptada.includes(matrizCodigo[i][0])) {
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0] , matrizCodigo[i][1]);
            }
        }
        
            return stringEncriptada;
    
        }
        

    function desencriptar(stringDesencriptada) {
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringDesencriptada = stringDesencriptada.toLowerCase();

        for(let i = 0; i < matrizCodigo.length; i++) {
            if(stringDesencriptada.includes(matrizCodigo[i][1])) {
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);
            }
        }

        return stringDesencriptada;

    }

    function copiarTexto() {
        mensagem.select();
        document.execCommand("copy");

        mensagemCopiada.style.display = "block";

        setTimeout(() => {
            mensagemCopiada.style.display = "none";
        }, 2000);

    } 

    btnCopiar.addEventListener("click", copiarTexto);

