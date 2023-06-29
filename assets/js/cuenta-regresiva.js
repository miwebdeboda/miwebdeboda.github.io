// Establecer la fecha de destino (año, mes (0-11), día, hora, minuto, segundo)
var fechaDestino = new Date("2023-12-02T18:29:59");

// Obtener el elemento del contador
var countdownElement = document.getElementById("countdown");

// Actualizar el contador cada segundo
var intervalo = setInterval(function () {
    // Obtener la fecha y hora actual
    var fechaActual = new Date().getTime();

    // Calcular la diferencia en milisegundos entre la fecha actual y la fecha de destino
    var diferencia = fechaDestino - fechaActual;

    // Calcular los días, horas, minutos y segundos restantes
    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Mostrar el contador en el elemento correspondiente
    countdownElement.innerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s";

    // Si la cuenta regresiva ha terminado, mostrar un mensaje
    if (diferencia < 0) {
        clearInterval(intervalo);
        countdownElement.innerHTML = "¡La cuenta regresiva ha terminado!";
    }
}, 1000);
