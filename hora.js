function mostrarFecha() {
    const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    const ahora = new Date();

    const diaSemana = diasSemana[ahora.getDay()];
    const dia = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const año = ahora.getFullYear();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    const mensaje = `Hoy es ${diaSemana} ${dia} de ${mes} de ${año}, y son las ${hora} horas, ${minutos} minutos con ${segundos} segundos.`;
    alert(mensaje);
}

function actualizarTiempoRestante() {
    const ahora = new Date();
    const finDeAño = new Date(ahora.getFullYear(), 11, 31, 23, 59, 59); // 31 de diciembre a las 23:59:59
    const diferencia = finDeAño - ahora;

    const diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const minutosRestantes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundosRestantes = Math.floor((diferencia % (1000 * 60)) / 1000);

    const contenedor = document.getElementById("tiemporestante");
    if (contenedor) {
        contenedor.textContent = `Quedan ${diasRestantes} días, ${minutosRestantes} minutos y ${segundosRestantes} segundos para que termine el año.`;
    }
}

function validar(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const solicitud = document.getElementById("solicitud").value.trim();


    if (nombre=="" || email=="" || solicitud=="") {
        alert("Por favor, complete todos los campos del formulario.");
     
        return false;
    }

    
    alert("Formulario enviado correctamente.");
    return true;
}

document.addEventListener("DOMContentLoaded",  function () {
    $("#fecha").datepicker();
    const formulario = document.getElementById("formularioContacto");
    if (formulario) {
        formulario.addEventListener("submit", validar);
    }

    mostrarFecha();
    actualizarTiempoRestante();
    setInterval(actualizarTiempoRestante, 1000);
});

