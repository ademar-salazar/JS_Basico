//mostrar valores en cosola
console.log("Hello, World!");

//uso de Variables

//var - foma antigua de declarar variables, actualmente no es recomendable
//var es global y puede ser redeclarada
var holaMundo = "Hola JS";
console.log(holaMundo);
holaMundo = "Hola JS modificado";
console.log(holaMundo);

//let - forma moderna de declarar variables, con alcance de bloque
//let es local y no puede ser redeclarada en el mismo bloque

let holaMundoLet = "Hola JS con let";  
console.log(holaMundoLet);
holaMundoLet = "Hola JS modificado con let";
console.log(holaMundoLet);

//const - forma moderna de declarar constantes, con alcance de bloque
//const es local y no puede ser redeclarada ni reasignada en el mismo bloque

const holaMundoConst = "Hola JS con const";
console.log(holaMundoConst);
//holaMundoConst = "Hola JS modificado con const"; // Esto causará un error
//console.log(holaMundoConst);

//*************** Tipos de datos ***************

//Primitivos

//String - cadena de texto
let nombre = "Ademar";
let alias = 'AdeSalaz';
let email = 'asalazar@logicastudio.com';

//Number - número
let edad = 35;
let altura = 1.64;

//Boolean - verdadero o falso
let esEstudiante = false;
let esProgramador = true;

//Undefined - variable sin valor asignado
let sinValor;
console.log(sinValor); // Imprime undefined

//Null - variable con valor nulo
let valorNulo = null;
console.log(valorNulo); // Imprime null

//Symbol - valor único e inmutable, usado para identificadores únicos
let simbolo = Symbol('miSimbolo');
console.log(simbolo); // Imprime el símbolo único

//BigInt - entero grande, usado para números enteros mayores que 2^53 - 1
let numeroGrande = BigInt(1234567890123456789012345678901234567890);
let otroNumeroGrande = 1234567890123456789012345678901234567890n; // También se puede usar el sufijo 'n'
console.log(otroNumeroGrande); // Imprime el número grande
console.log(numeroGrande); // Imprime el número grande

//Mostrar los tipos de datos en consola
console.log("*************** Tipos de datos ***************");
console.log(typeof nombre); // Imprime "string"
console.log(typeof edad); // Imprime "number"
console.log(typeof esEstudiante); // Imprime "boolean"
console.log(typeof sinValor); // Imprime "undefined"
console.log(typeof valorNulo); // Imprime "object" (esto es un comportamiento peculiar
console.log(typeof simbolo); // Imprime "symbol"
console.log(typeof numeroGrande); // Imprime "bigint"

//****************** Operadores ******************

// Aritméticos
console.log("*************** Operadores aritméticos ***************");
let a = 10;
let b = 5;
let suma = a + b; // Suma
let resta = a - b; // Resta
let multiplicacion = a * b; // Multiplicación
let division = a / b; // División
let modulo = a % b; // Módulo (resto de la división)
let potencia = a ** b; // Potencia (a elevado a b)

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);
console.log("Potencia:", potencia);

//incremento y decremento
console.log("*************** Operadores de incremento y decremento ***************");
a++; // Incremento
console.log("Incremento:", a); 
a--; // decremento
console.log("decremento:", a); 

// Asignación
console.log("*************** Operadores de asignación ***************");
let c = 20; // operador de asignacion = 
c += 5; // c = c + 5
console.log("Asignación con suma:", c); // 25

c -= 5; // c = c - 5
console.log("Asignación con resta:", c); // 20 
c *= 2; // c = c * 2
console.log("Asignación con multiplicación:", c);   
c /= 2; // c = c / 2    
console.log("Asignación con división:", c); // 10
c %= 3; // c = c % 3
console.log("Asignación con módulo:", c); // 1
c **= 2; // c = c ** 2
console.log("Asignación con potencia:", c); // 1

// Comparación
console.log("*************** Operadores de comparación ***************");
let x = 10;
let y = 20;
let esIgual = x == y; // Igualdad (valor)
let esIdentico = x === 10; // Identidad (valor y tipo)
let NoEsIdentico = x === "10"; // No idéntico (valor y tipo)
console.log("Es igual:", esIgual); // false
console.log("Es idéntico:", esIdentico); // false
console.log(x==10); // true
console.log(x=="10"); // true - igualdad por valor, no por tipo
let esDiferente = x != y; // Diferente (valor)
let esNoIdentico = x !== y; // No idéntico (valor y tipo)   
console.log("Es diferente:", esDiferente); // true
console.log("Es no idéntico:", esNoIdentico); // true
let esMayor = x > y; // Mayor que
let esMenor = x < y; // Menor que
let esMayorIgual = x >= y; // Mayor o igual que
let esMenorIgual = x <= y; // Menor o igual que
console.log("Es mayor:", esMayor); // false
console.log("Es menor:", esMenor); // true
console.log("Es mayor o igual:", esMayorIgual); // false
console.log("Es menor o igual:", esMenorIgual); // true 

// Lógicos
console.log("*************** Operadores lógicos ***************");
let aVerdadero = true;
let bFalso = false;
let and = aVerdadero && bFalso; // AND lógico
let or = aVerdadero || bFalso; // OR lógico
let not = !aVerdadero; // NOT lógico
console.log("AND lógico:", and); // false
console.log("OR lógico:", or); // true
console.log("NOT lógico:", not); // false

//ternario
console.log("*************** Operador ternario ***************");
let edadUsuario = 18;
let mensaje = (edadUsuario >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // "Eres mayor de edad"   

//Manejo de cadenas de texto
console.log("*************** Manejo de cadenas de texto ***************");
let texto = "Hola, JavaScript!";
let textoLargo = "Este es un texto muy largo que contiene varias palabras y caracteres.";
// Concatenación
let saludo = "Hola, " + nombre + "!"; // Usando el operador +
let saludoTemplate = `Hola, ${nombre}!`; // Usando template literals (comillas invertidas)
console.log(saludo);
console.log(saludoTemplate);
// Longitud de la cadena
let longitud = texto.length;
console.log("Longitud de texto:", longitud);
// Acceso a caracteres
let primerCaracter = texto.charAt(0);
console.log("Primer carácter:", primerCaracter); // "H"
console.log("Primer carácter (usando corchetes):", texto[0]); // "H"
let ultimoCaracter = texto.charAt(texto.length - 1);
console.log("Último carácter (usando corchetes):", texto[texto.length - 1]);
console.log("Último carácter:", ultimoCaracter); // "!"

// Metodos comunes
console.log("*************** Métodos comunes de cadenas de texto ***************");
let textoEnMayusculas = texto.toUpperCase();
console.log("Texto en mayúsculas:", textoEnMayusculas);
let textoEnMinusculas = texto.toLowerCase();
console.log("Texto en minúsculas:", textoEnMinusculas);
let textoSinEspacios = texto.trim();
console.log("Texto sin espacios:", textoSinEspacios);
let indexDePalabra = texto.indexOf("JavaScript"); // si no encuentra la palabra devuelve -1 
console.log("Índice de 'JavaScript':", indexDePalabra);
let includePalabra = texto.includes("JavaScript"); // devuelve true o false
console.log("¿Incluye 'JavaScript'?:", includePalabra);
let slicePalabra = texto.slice(0, 4); // Extrae una parte de la cadena
console.log("Slice de texto (0 a 4):", slicePalabra);
let textoReemplazado = texto.replace("JavaScript", "JS");
console.log("Texto reemplazado:", textoReemplazado);
let palabras = texto.split(", ");
console.log("Palabras separadas:", palabras); // Divide la cadena en un array de palabras
let textoUnido = palabras.join(" - ");
console.log("Texto unido:", textoUnido); // Une el array de palabras en una cadena

// Plantillas literales (template literals)
console.log("*************** Plantillas literales (template literals) ***************");
let nombreUsuario = "Ademar";
let edadUsuario2 = 35;
let mensajeTemplate = `Hola, mi nombre es ${nombreUsuario} y tengo ${edadUsuario2} años.`;
console.log(mensajeTemplate); // "Hola, mi nombre es Ademar y tengo 35 años."
// Multilinea
let mensajeMultilinea = `Este es un mensaje
que ocupa varias líneas
en el código.`;
console.log(mensajeMultilinea);

//****************** Estructuras de control ******************

// Condicionales
// if, else if, else
console.log("*************** Condicionales if, else, else if***************");
let edad2 = 18;
if (edad2 < 18) {
    console.log("Eres menor de edad");
} else if (edad2 === 18) {
    console.log("Tienes 18 años");
} else {
    console.log("Eres mayor de edad");
}

//operador ternario
let mensaje2 = (edad2 >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje2);

// switch
console.log("*************** switch ***************");
let diaSemana = 3;
switch (diaSemana) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Día inválido");
}

// Estructuras de datos
// Arrays
console.log("*************** Arrays ***************");
// Definición de un array
let frutas = ["Manzana", "Banana", "Naranja", "Uva",1,true];
let otrasFrutas = new Array("Fresa", "Mango", "Piña",4,false);
console.log("Frutas:", frutas);
console.log("Otras frutas:", otrasFrutas);

// Acceso a elementos
console.log("Primera fruta:", frutas[0]);
console.log("Última fruta:", frutas[frutas.length - 1]);

// Modificación de elementos
frutas[1] = "Kiwi";
console.log("Frutas después de la modificación:", frutas);

// Agregar elementos
frutas.push("Pera");
console.log("Frutas después de agregar una nueva fruta:", frutas);

var frutaEliminada = frutas.pop(); // Elimina el último elemento y devuelve el elemento eliminado
console.log("Frutas después de eliminar la última fruta:", frutas);
console.log("Fruta eliminada:", frutaEliminada);

//shift y unshift - agrega y elimina al principio del array
frutas.unshift("Melón");
console.log("Frutas después de agregar una fruta al principio:", frutas);
var frutaEliminadaInicio = frutas.shift(); // Elimina el primer elemento y devuelve el elemento eliminado
console.log("Frutas después de eliminar la primera fruta:", frutas);
console.log("Fruta eliminada:", frutaEliminadaInicio);

//largo de un array
console.log("Número de frutas:", frutas.length);

//Borrar un array
frutas = [];  // Forma de vaciar un array
frutas.length = 0; // Otra forma de vaciar un array
console.log("Frutas después de borrar el array:", frutas);

// Slice y Splice
// slice - crea una copia de una parte del array
let frutasCopia = frutas.slice(0, 2); // Copia los primeros 2 elementos
console.log("Copia de las primeras dos frutas:", frutasCopia);
// splice - cambia el contenido de un array eliminando o reemplazando elementos existentes y/o agregando nuevos elementos
frutas = ["Manzana", "Banana", "Naranja", "Uva"];
console.log("Frutas originales:", frutas);
frutas.splice(1, 2, "Kiwi", "Pera");
frutas.splice(2, 1); // Elimina 1 elemento en la posición 2
console.log("Frutas después de eliminar una fruta:", frutas);

// Sets
console.log("*************** Sets ***************");
// Un Set es una colección de valores únicos, no permite duplicados
// Se puede crear un Set a partir de un array
//Definición de un Set vacío    
let mySet = new Set();
// Deinición de un Set basado en un array
let numeros = [1, 2, 3, 4, 5, 1, 2];
mySet = new Set(numeros);
console.log("Set de números:", mySet);

//Metodos comunes de un Set
console.log("**************** Métodos comunes de un Set ***************");
// Agregar elementos
mySet.add(6);
console.log("Set después de agregar un elemento:", mySet);

// Verificar si un elemento existe
console.log("¿El set contiene el número 3?", mySet.has(3));

// Eliminar elementos
let eliminado = mySet.delete(2); // Recibe como parámetro el elemento a eliminar, ojo, no es la posición, es el valor
console.log("¿Se eliminó el número 2?", eliminado); // true si se eliminó, false si no existía
console.log("Set después de eliminar el número 2:", mySet);

// Obtener el tamaño del set
console.log("Tamaño del set:", mySet.size);

//convertir un Set a un Array
let arrayDesdeSet = Array.from(mySet);
console.log("Array desde el Set:", arrayDesdeSet);

//convertir un Array a un Set
let nuevoSet = new Set(arrayDesdeSet);
console.log("Nuevo Set desde el Array:", nuevoSet);

// Limpiar el set
//mySet.clear();
console.log("Set después de limpiar:", mySet);

// Maps
console.log("*************** Maps ***************");
// Un Map es una colección de pares clave-valor, donde las claves pueden ser de cualquier tipo
// Definición de un Map vacío
let myMap = new Map();
// Definición de un Map con pares clave-valor
myMap = new Map([
    ["nombre", "Ademar"],
    ["edad", 34],
    ["ciudad", "Guatemala"]
]);
console.log("Map de usuario:", myMap);

// Métodos comunes de un Map
console.log("**************** Métodos comunes de un Map ***************");

// Agregar elementos
myMap.set("pais", "Guatemala"); // Agrega un nuevo par clave-valor
myMap.set("nombre", "Ademar Salazar"); // Actualiza el valor de la clave "nombre"
console.log("Map después de agregar un elemento:", myMap);

// Obtener elementos
console.log("Nombre:", myMap.get("nombre"));
console.log("Edad:", myMap.get("edad"));

// Verificar si una clave existe
console.log("¿El map tiene la clave 'ciudad'?", myMap.has("ciudad"));

// Eliminar elementos
myMap.delete("edad");
console.log("Map después de eliminar la clave 'edad':", myMap);

// Obtener el tamaño del map
console.log("Tamaño del map:", myMap.size);

// Obtener todas las claves
let claves = myMap.keys();
console.log("Claves del map:", Array.from(claves)); // Convertir el iterador a un array
// Obtener todos los valores
let valores = myMap.values();
console.log("Valores del map:", Array.from(valores)); // Convertir el iterador a un array
// Obtener todas las entradas (pares clave-valor)
let entradas = myMap.entries();
console.log("Entradas del map:", Array.from(entradas)); // Convertir el iterador a un array

// Limpiar el map
//myMap.clear();
console.log("Map después de limpiar:", myMap);

// Iteraciónes o Bucles
console.log("*************** Iteraciones o Bucles ***************");

// For
console.log("*************** For ***************");
for (let i = 0; i < 5; i++) {
    console.log("Número:", i);
}

// bucle aplicado a una estructura de datos
console.log("*************** For con Array ***************");
let frutasArray = ["Manzana", "Banana", "Naranja", "Uva"];
for (let i = 0; i < frutasArray.length; i++) {
    console.log("Fruta:", frutasArray[i]);
}

// while
console.log("*************** While ***************");
let j = 0;
while (j < 5) {
    console.log("Número:", j);
    j++;
}

// do while
console.log("*************** Do While ***************");
let k = 0;
do {
    console.log("Número:", k);
    k++;
} while (k < 5);

// for...of
console.log("*************** For...of con array***************");
//recorr un array
for (let fruta of frutasArray) {
    console.log("Fruta:", fruta);
}
//recorre un set
console.log("*************** For...of con Set ***************");
for (let numero of mySet) {
    console.log("Número:", numero);
}
//recorre un map
console.log("*************** For...of con Map ***************");
for (let [clave, valor] of myMap) {
    console.log("Clave:", clave, "Valor:", valor);
}

// Break y Continue
console.log("*************** Break y Continue ***************");
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Break en 2");
        break; // Sale del bucle
    }
    console.log("Número:", i);
}
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Continue en 2");
        continue; // Salta a la siguiente iteración
    }
    console.log("Número:", i);
}

// Funciones
console.log("*************** Funciones ***************");

// Definición de una función
function saludar(nombre) {
    console.log("Hola, " + nombre);
}

// Llamada a la función
saludar("Ademar");

// Funciones con parámetros y retorno
function sumar(a, b) {
    return a + b;
}
console.log("Suma:", sumar(5, 3));

// Funciones anónimas
let multiplicar = function(x, y) {
    return x * y;
};
console.log("Multiplicación:", multiplicar(4, 6));

// Funciones flecha
let dividir = (x, y) => x / y;
console.log("División:", dividir(8, 2));

// Parametros por defecto
function saludarConEdad(nombre, edad = 18) {
    console.log(`Hola, ${nombre}. Tienes ${edad} años.`);
}
saludarConEdad("Ademar"); // Usa el valor por defecto de edad
saludarConEdad("Ademar", 35); // Usa el valor proporcionado de edad

//Retorno de valores
function obtenerNombreCompleto(nombre, apellido) {
    return `${nombre} ${apellido}`;
}
console.log("Nombre completo:", obtenerNombreCompleto("Ademar", "Gonzalez"));

//Funciones anidadas
function funcionExterna() {
    console.log("Esta es la función externa.");
    function funcionInterna() {
        console.log("Esta es la función interna.");
    }
    funcionInterna(); // Solo se puede llamar dentro de la función externa
}
funcionExterna();

// Funciones de orden superior
// Las funciones de orden superior son aquellas que pueden recibir otras funciones como argumentos o devolver funciones como resultado.
console.log("*************** Funciones de orden superior ***************");

// Ejemplo de función de orden superior
function procesarNumeros(numeros, operacion) {
    let resultado = [];
    for (let n of numeros) {
        resultado.push(operacion(n));
    }
    return resultado;
}

// Funciones que se pasan como argumento
function duplicar(x) {
    return x * 2;
}

function triplicar(x) {
    return x * 3;
}

// Uso de funciones de orden superior
numeros = [1, 2, 3, 4, 5];
console.log("Duplicados:", procesarNumeros(numeros, duplicar));
console.log("Triplicados:", procesarNumeros(numeros, triplicar));

// forEach
console.log("*************** forEach ***************");
numeros.forEach(function(num) {
    console.log("Número:", num);
});

console
// forEach con función flecha
numeros.forEach(num => {
    console.log("Número (con flecha):", num);
});

console.log("*************** forEach con Map y Set ***************");
// forEach con funcion flecha y map
myMap.forEach((valor, clave) => {
    console.log(`Clave: ${clave}, Valor: ${valor}`);
});

// forEach con Set
mySet.forEach(numero => {
    console.log("Número del Set:", numero);
});

