
//problema 1

function problema1(){
    //vamos a obtener la entrada de los datos
    var p1_input = document.querySelector('#p1-input').value;

    var p1_palabras = p1_input.split(' ');

    p1_palabras = p1_palabras.reverse();

    p1_palabras = p1_palabras.join(' ');

    var p1_res='';

    p1_res = "Lista ordenada: " + p1_input + '\n' 
            + "Lista alreves: " + p1_palabras ;
    
    document.querySelector('#p1-output').textContent = p1_res;
}

//proble 2

function problema2(){
    //vamos a obtener la entrada de los datos
    var p2_inputArray = [];

    p2_inputArray.push(document.querySelector('#p2-x1').value,  
                        document.querySelector('#p2-x2').value, 
                        document.querySelector('#p2-x3').value, 
                        document.querySelector('#p2-x4').value, 
                        document.querySelector('#p2-x5').value,
                        document.querySelector('#p2-y1').value,
                        document.querySelector('#p2-y2').value,
                        document.querySelector('#p2-y3').value,
                        document.querySelector('#p2-y4').value,
                        document.querySelector('#p2-y5').value );

    
    var p2_input = parseFloat( (p2_inputArray[0]*p2_inputArray[5]) + 
                                (p2_inputArray[1]*p2_inputArray[6]) +
                                (p2_inputArray[2]*p2_inputArray[7]) +
                                (p2_inputArray[3]*p2_inputArray[8]) +
                                (p2_inputArray[4]*p2_inputArray[9]) );

    const p2_res = p2_input;

    document.querySelector('#p2-output').textContent = p2_res;
}

//problema 3

function problema3(){

    //definir un alfabeto
    var alfabeto = ['A', 'B', 'C', 'D', 'E', 
        'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'];

    //vamos a obtener la entrada de los datos
    var p3_input = document.querySelector('#p3-input').value;

    var p3_palabras = p3_input.split(',');

    //tengo que eliminar los espacios

    p3_palabras = p3_palabras.map(function (palabra){
        //crear una expresion que me recupere las palabras
        return palabra.replace(/\s/g, '').toUpperCase();
    });

    //tengo que calcular cuantos caracteres unicos hay
    var p3_res = '';
    
    p3_palabras.forEach(function (palabra, i){
        //separar las palabras actuales del array que 
        //contiene cada letra de dicha palabra
        var letras_unicas = [];
        var palabra_array = palabra.split('');

        //iteracion
        alfabeto.forEach(function (letra, J){
            //itero la palabra
            palabra_array.forEach(function (letras_palabras, k){

                //comprobar que la letra este dentro del alfabeto
                if(letras_palabras == letra){
                    //si la letra no la hemos contado
                    //la agregamos a un array para contar
                    //las letras unicas
                    if(letras_unicas.indexOf(letra)<0){
                        letras_unicas.push(letra);
                    }
                }
            });
        });
        p3_res += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
    });
    document.querySelector('#p3-output').textContent = p3_res;
   

}