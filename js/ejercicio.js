// Formulario

// Variables globales

let cantidadObras = 0; 
let obrasCargadas = 0; 
let tiempoPorMB = 0; 
let costoPorMB = 0;
let duracionTotal = 0; 
let pesoTotal = 0; 
let obraMayorDuracion = ""; 
let mayorDuracion = 0; 
let pesoObraMayor = 0;

//  Elementos del HTML 
 
const formCantidad = document.getElementById("formCantidad"); 
const formDatosGenerales = document.getElementById("formDatosGenerales"); 
const formObra = document.getElementById("formObra"); 
const cantidad = document.getElementById("cantidad"); 
const tiempoMB = document.getElementById("tiempoMB"); 
const costoMB = document.getElementById("costoMB"); 
const nombreObra = document.getElementById("nombreObra"); 
const duracion = document.getElementById("duracion"); 
const peso = document.getElementById("peso"); 
const btnCantidad = document.getElementById("btnCantidad"); 
const btnDatosGenerales = document.getElementById("btnDatosGenerales"); 
const btnObra = document.getElementById("btnObra"); 
const btnDuracionTotal = document.getElementById("btnDuracionTotal"); 
const btnDuracionPromedio = document.getElementById("btnDuracionPromedio"); 
const btnMayorDuracion = document.getElementById("btnMayorDuracion"); 
const btnPresupuesto = document.getElementById("btnPresupuesto"); 
const btnReiniciar = document.getElementById("btnReiniciar"); 
const contador = document.getElementById("contador"); 
const resultado = document.getElementById("resultado"); 


//  1. Ingresar cantidad de obras 

formCantidad.addEventListener("submit", function(event) { 
    event.preventDefault(); 
    let valor = Number(cantidad.value); 

    // Validación 
    if (!Number.isInteger(valor) || valor <= 0) {
         alert("La cantidad de obras debe ser un número entero mayor que 0."); 
         cantidad.focus(); return;
    } 
    cantidadObras = valor; 

    // Ya no se puede modificar la cantidad 
    cantidad.disabled = true; 
    btnCantidad.disabled = true; 
    
    // Habilitamos los datos generales 
    tiempoMB.disabled = false; 
    costoMB.disabled = false; 
    btnDatosGenerales.disabled = false; 
    tiempoMB.focus();
}); 
    


//  2. Ingresar datos generales
     
formDatosGenerales.addEventListener("submit", function(event) { 
    event.preventDefault(); 
    let tiempo = Number(tiempoMB.value);
    let costo = Number(costoMB.value);
    
    // Validaciones 
    if (!Number.isFinite(tiempo) || tiempo <= 0) {
            alert("El tiempo de transferencia debe ser mayor que 0.");
            tiempoMB.focus(); return;
        } 
        if (!Number.isFinite(costo) || costo <= 0) { 
        alert("El costo mensual debe ser mayor que 0.");
        costoMB.focus();
        return; 
    } 
    
    tiempoPorMB = tiempo;
    costoPorMB = costo; 
    
    // Deshabilitamos los datos generales
    tiempoMB.disabled = true; 
    costoMB.disabled = true; 
    btnDatosGenerales.disabled = true;
    
    // Habilitamos la carga de obras
    nombreObra.disabled = false; 
    duracion.disabled = false; 
    peso.disabled = false; 
    btnObra.disabled = false;
    nombreObra.focus();
}); 
    


//  3. Cargar cada obra
     
formObra.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let nombre = nombreObra.value.trim(); 
    let minutos = Number(duracion.value);
    let mb = Number(peso.value); 
    
    
    //  Validación del nombre  

    if (nombre === "") { 
        alert("Debe ingresar el nombre de la obra."); 
        nombreObra.focus(); return; 
    } 
    
    
    //  Validación de duración
    
    if (!Number.isFinite(minutos) || minutos <= 0) {
        alert("La duración debe ser un número mayor que 0."); 
        duracion.focus(); return;
    } 
    
    //  Validación del peso 
    
    if (!Number.isFinite(mb) || mb <= 0) { 
        alert("El peso del archivo debe ser un número mayor que 0.");
        peso.focus(); return; 
    } 
    
    
    // Acumula los datos
    
    obrasCargadas++; 
    duracionTotal += minutos;
    pesoTotal += mb;
    
    
    //  Busca la obra de mayor duración 
    
    if (obrasCargadas === 1 || minutos > mayorDuracion) {
        mayorDuracion = minutos; 
        obraMayorDuracion = nombre;
        pesoObraMayor = mb; 
    }
        
    //  Actualiza el contador 
        
    contador.textContent = "Obras cargadas: " + obrasCargadas + " de " + cantidadObras; 
        
        
    // Limpia el formulario
        
    nombreObra.value = "";
    duracion.value = ""; 
    peso.value = "";
    
        
    // ¿Ya se cargaron las obras?
        
    if (obrasCargadas === cantidadObras) { 
        // Deshabilitamos la carga 
        nombreObra.disabled = true; 
        duracion.disabled = true; 
        peso.disabled = true; 
        btnObra.disabled = true;
            
        // Habilita los botones de resultados
        btnDuracionTotal.disabled = false; 
        btnDuracionPromedio.disabled = false; 
        btnMayorDuracion.disabled = false; 
        btnPresupuesto.disabled = false; 
        alert("Se cargaron todas las obras.");
        } 
        else {
            nombreObra.focus();
        } 
}); 
        
    
        
//  4. Duración total 
    
        
btnDuracionTotal.addEventListener("click", function() {
    resultado.innerHTML = 
    "<h3>Duración total</h3>" +
    "<p>" + duracionTotal.toFixed(2) + " minutos</p>"; 
    habilitarReiniciar();
}); 
        
    
        
//  5. Duración promedio
         
btnDuracionPromedio.addEventListener("click", function() { 
    let promedio = duracionTotal / cantidadObras; 
    resultado.innerHTML = 
    "<h3>Duración promedio</h3>" +
        "<p>" + promedio.toFixed(2) + " minutos</p>";
    habilitarReiniciar();
}); 
        
    
        
//  6. Obra de mayor duración 
         
btnMayorDuracion.addEventListener("click", function() { 
    // Tiempo de transferencia:
    // peso de la obra * tiempo por MB 
    let tiempoTransferencia = 
    pesoObraMayor * tiempoPorMB; 
    
    resultado.innerHTML = 
    "<h3>Obra de mayor duración</h3>" +
    "<p><strong>Obra:</strong> " + obraMayorDuracion +
    "</p>" + "<p><strong>Duración:</strong> " +
    mayorDuracion.toFixed(2) + " minutos</p>" +
    "<p><strong>Tiempo de transferencia:</strong> " 
    + tiempoTransferencia.toFixed(2) +
    " milisegundos</p>"; 
    habilitarReiniciar();
});
            
        
            
//  7. Presupuesto anual
             
btnPresupuesto.addEventListener("click", function() { 
    // Costo mensual: 
    // MB totales * costo por MB
    let costoMensual = pesoTotal * costoPorMB;
    // Costo anual: 
    // costo mensual * 12
    let costoAnual = costoMensual * 12; 
    resultado.innerHTML = "<h3>Presupuesto anual</h3>" +
    "<p><strong>Peso total:</strong> " + 
    pesoTotal.toFixed(2) + " MB</p>" +
    "<p><strong>Costo mensual:</strong> $" +
    costoMensual.toFixed(2) + "</p>" +
    "<p><strong>Presupuesto necesario durante un año:</strong> $" +
    costoAnual.toFixed(2) + "</p>";
    habilitarReiniciar();
}); 
            
        
            
 // 8. REINICIAR 
        
btnReiniciar.addEventListener("click", function() { 
    location.reload();
});

function habilitarReiniciar() {
    btnReiniciar.disabled = false;
}