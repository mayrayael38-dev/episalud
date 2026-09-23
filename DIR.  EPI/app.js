// app.js

// --- 1. Lógica para la alerta epidemiológica ---
const cajaAlerta = document.getElementById('cajaAlerta');
const btnCerrarAlerta = document.getElementById('btnCerrarAlerta');

btnCerrarAlerta.addEventListener('click', function() {
    // Ocultamos la alerta cambiando su estilo CSS mediante JS
    cajaAlerta.style.display = 'none'; 
});


// --- 2. Lógica para la actualización de datos ---
const btnActualizar = document.getElementById('btnActualizar');
const datosDengue = document.getElementById('datosDengue');
const datosCovid = document.getElementById('datosCovid');
const fechaActualizacion = document.getElementById('fechaActualizacion');

btnActualizar.addEventListener('click', function() {
    // Cambiamos el texto del botón temporalmente para simular carga
    btnActualizar.textContent = "Conectando con el servidor...";
    
    // Usamos setTimeout para simular que tarda 1.5 segundos en descargar los datos por internet
    setTimeout(function() {
        // Generamos datos simulados (en la vida real, esto vendría de una base de datos)
        datosDengue.textContent = "42";
        datosCovid.textContent = "15";
        
        // Obtenemos la fecha y hora actual del sistema
        const hoy = new Date();
        fechaActualizacion.textContent = hoy.toLocaleString();
        
        // Restauramos el botón
        btnActualizar.textContent = "Datos actualizados";
        btnActualizar.disabled = true; // Lo deshabilitamos para evitar múltiples clics
        btnActualizar.style.backgroundColor = "#666"; // Lo ponemos gris
    }, 1500); // 1500 milisegundos = 1.5 segundos
});