let llavesEncriptacion = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"


}

const encriptar = document.getElementById("encriptar")
const desencriptar = document.getElementById("desencriptar")
const containerMensajeEncriptado = document.getElementById("container-mensaje-encriptado")
const resultadoContainer = document.getElementById("resultado-container")
const mensajeEncriptado = document.getElementById("mensajeEncriptado")



// escuchando eventos

function mostrarMensajeEncriptado(){
    
    mensajeEncriptado.innerHTML = encriptarMensaje()
    mostrarSeccionEncriptada()

}

function mostrarSeccionEncriptada(){
    containerMensajeEncriptado.classList.toggle("esconder")
    resultadoContainer.classList.toggle("esconder")
}

function encriptarMensaje(){
    const mensaje = document.getElementById("textareaMensaje").value
    let mensajeEncriptado = mensaje.split("").map(letra => {
        if (letra === "a"){
            letra = llavesEncriptacion.a
        }else if (letra === "e"){
            letra = llavesEncriptacion.e
        }else if (letra === "i"){
            letra = llavesEncriptacion.i
        }else if (letra === "o"){
            letra = llavesEncriptacion.o
        }else if (letra === "u"){
            letra = llavesEncriptacion.u
        }

        return (
            letra
        )
    }).join("")


    // -----------  FORMA SIN USAR FUNCIONES DE JAVASCRIPT -------------------
    // for (const letra of mensaje) {
    //     if (letra === "a"){
    //         mensajeEncriptado = mensajeEncriptado + llavesEncriptacion.a
    //     }else if (letra === "e"){
    //         mensajeEncriptado = mensajeEncriptado + llavesEncriptacion.e
    //     }else if (letra === "i"){
    //         mensajeEncriptado = mensajeEncriptado + llavesEncriptacion.i
    //     }else if (letra === "o"){
    //         mensajeEncriptado = mensajeEncriptado + llavesEncriptacion.o
    //     }else if (letra === "u"){
    //         mensajeEncriptado = mensajeEncriptado + llavesEncriptacion.u
    //     }else{
    //         mensajeEncriptado = mensajeEncriptado + letra
    //     }
  
    // }
    return mensajeEncriptado
}

function mostrarMensajeDesencriptado (){
    mensajeEncriptado.innerHTML = desencriptarMensaje()
    mostrarSeccionEncriptada()
}

function desencriptarMensaje (){
    const mensaje = document.getElementById("textareaMensaje").value
    let mensajeDesencriptado = ""

    mensajeDesencriptado =  mensaje.replaceAll("ai", "a")
    mensajeDesencriptado = mensajeDesencriptado.replaceAll("enter", "e")
    mensajeDesencriptado = mensajeDesencriptado.replaceAll("imes", "i")
    mensajeDesencriptado = mensajeDesencriptado.replaceAll("ober", "o")
    mensajeDesencriptado = mensajeDesencriptado.replaceAll("ufat", "u")
    




    return mensajeDesencriptado
}




encriptar.addEventListener("click", mostrarMensajeEncriptado)
desencriptar.addEventListener("click", mostrarMensajeDesencriptado)


