//funcion que se encargue de validar por expresion regular

function validarn(e){

    var teclado = (document.all)?e.KeyCode : e.which;
    /* vamos aplicar una prueba logica a todo el teclado
    a partir de un patron este patron debe de ser
    numerico y solo acepta 0-9 . todo lo demas lo deja
    escapar */
    if(teclado==8) return true;
    var patron = /[0-9\d .]/;

    var probar = String.fromCharCode(teclado);

    return patron.test(probar);

}


function interes(){

    var valor = document.formulario1.cantidad.value;

    //tipo de dato

    var resul = parseInt(valor);

    var interes = resul*0.02;

    var total = resul + interes;

    //vamos a imprimir el resultado

    document.formulario1.sueldoI.value = "$" + total;
}

function borrard_p1(){

    document.formulario1.sueldoI.value = "";
    document.formulario1.cantidad.value = "";
}

function conceptos(){

    //leer los valores de ventas y sueldo base

    var sueldoB = document.formulario2.cantidad.value;
    var venta1 = document.formulario2.cantidadV1.value;
    var venta2 = document.formulario2.cantidadV2.value;
    var venta3 = document.formulario2.cantidadV3.value;

    // Sumar los valores de las 3 ventas
    var con = (parseInt(venta1) + parseInt(venta2) + parseInt(venta3));
    var concepto = (con * 0.1) + con;
    var total = concepto + parseInt(sueldoB);

    //Imprimir resultados

    document.formulario2.conceptoF.value = "$ " + concepto;
    document.formulario2.totalF.value = "$ " + total;
}

function borrard_p2(){

    document.formulario2.cantidad.value = "";
    document.formulario2.cantidadV1.value = "";
    document.formulario2.cantidadV2.value = "";
    document.formulario2.cantidadV3.value = "";
    document.formulario2.conceptoF.value = "";
    document.formulario2.totalF.value = "";
}

function descuento(){

    var compra = document.formulario3.compra.value;

    //calcular descuento
    var compraT = parseInt(compra)
    var desc = compraT*0.15;
    var descuento = compraT - desc;

    //imprimir el resultado

    document.formulario3.descuentoF.value = "$ " + descuento;
}

function borrard_p3(){
    document.formulario3.compra.value = "";
    document.formulario3.descuentoF.value = "";
}

function calcularCalificaciones(){
    //obtener datos

    var cal1 = document.formulario4.calificacion1.value;
    var cal2 = document.formulario4.calificacion2.value;
    var cal3 = document.formulario4.calificacion3.value;
    var calEf = document.formulario4.calificacionEf.value;
    var calTf = document.formulario4.calificacionTf.value;

   //calcular calificacion parcial

   var promedio = ((parseInt(cal1) + parseInt(cal2) + parseInt(cal3)) / 3) * 0.55;
   var examen = parseInt(calEf) * 0.3;
   var trabajo = parseInt(calTf) * 0.15;

   var calificacionT = promedio + examen + trabajo;

   //imprimir calificaciones

   document.formulario4.calificacionFinal.value = calificacionT;
}

function borrard_p4(){
    document.formulario4.calificacion1.value = "";
    document.formulario4.calificacion2.value = "";
    document.formulario4.calificacion3.value = "";
    document.formulario4.calificacionEf.value = "";
    document.formulario4.calificacionTf.value = "";
    document.formulario4.calificacionFinal.value = "";
}

function porcentajes(){
    //Leer datos
    var alumnos = document.formulario5.alumnos.value;
    var alumnas = document.formulario5.alumnas.value;

    //Calcular porcentajes

    var alum = (parseInt(alumnas) + parseInt(alumnos));

    var alumnoP = (parseInt(alumnos)*100)/alum;
    var alumnaP = (parseInt(alumnas)*100)/alum;

    //Imprimir valores

    document.formulario5.alumnosP.value = "%" + alumnoP;
    document.formulario5.alumnasP.value = "%" + alumnaP;
}

function borrard_p5(){
    document.formulario5.alumnos.value = "";
    document.formulario5.alumnas.value = "";
    document.formulario5.alumnosP.value = "";
    document.formulario5.alumnasP.value = "";
}

function edad(){
    //leer datos
    var edadA = parseInt(document.formulario6.edadA.value);
    
    //Calcular los años

    var edadF = 2022 - edadA;

    //imprimir valores

    document.formulario6.edadF.value = edadF;
}

function borrard_p6(){
    document.formulario6.edadA.value = "";
    document.formulario6.edadF.value = "";
}