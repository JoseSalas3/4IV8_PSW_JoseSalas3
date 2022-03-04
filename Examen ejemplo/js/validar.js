const form = document.getElementById("interesForm");

form.addEventListener("submit" , function(evente) {

    event.preventDefault();
    console.log(event)
    }

 );

function Calcular(interesForm){

    const monto = document.querySelector("#monto").value;

    if(interesForm.monto.value < 100000){
        alert("Ingrese un valor mayor a cien mil");
        return false;
    }
    if(interesForm.monto.value > 1000000){
        alert("Ingrese un valor menor a un millon");
        return false;
    }

    document.querySelector("#montoF").innerHTML = monto;

    const cuota = document.querySelector("#cuota").value;

    const i = monto*0.10;

    if(cuota < i){
        alert("Debes ingresar una cuota inicial de minimo el 10%  min: " + i)
    }

    document.querySelector("#cuotaF").innerHTML = cuota;

    const meses = document.querySelector("#meses").value;

    if(meses != 3 && meses != 6 && meses != 9 && meses != 12 && meses != 18){
        alert("Los periodos de meses aceptados son 3,6,9,12,18 meses")
    }

    document.querySelector("#mesesF").innerHTML = meses;

    const interes = 1.369 ;

    const amortizado = ((interes * meses)*monto).toFixed(3);

    document.querySelector("#valorF").innerHTML = amortizado;

    const valorInteres = (amortizado - monto).toFixed(3);

    document.querySelector("#cuotaFinal").innerHTML = valorInteres;
}

function Calculari(){

    const monto = document.querySelector("#monto").value;

    document.querySelector("#montoF").innerHTML = monto;

    const cuota = document.querySelector("#cuota").value;

    document.querySelector("#cuotaI").innerHTML = cuota;

    const meses = document.querySelector("#meses").value;

    document.querySelector("#mesesF").innerHTML = meses;

    const interes = 1.369 ;

    const amortizado = ((interes * meses)*monto).toFixed(3);

    document.querySelector("#valorF").innerHTML = amortizado;

    const valorInteres = (amortizado - monto).toFixed(3);

    document.querySelector("#cuotaFinal").innerHTML = valorInteres;
}