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
console.log(typeof nombre); // Imprime "string"
console.log(typeof edad); // Imprime "number"
console.log(typeof esEstudiante); // Imprime "boolean"
console.log(typeof sinValor); // Imprime "undefined"
console.log(typeof valorNulo); // Imprime "object" (esto es un comportamiento peculiar
console.log(typeof simbolo); // Imprime "symbol"
console.log(typeof numeroGrande); // Imprime "bigint"

//****************** Operadores ******************

// Aritméticos
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
a++; // Incremento
console.log("Incremento:", a); 
a--; // decremento
console.log("decremento:", a); 

// Asignación
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
let aVerdadero = true;
let bFalso = false;
let and = aVerdadero && bFalso; // AND lógico
let or = aVerdadero || bFalso; // OR lógico
let not = !aVerdadero; // NOT lógico
console.log("AND lógico:", and); // false
console.log("OR lógico:", or); // true
console.log("NOT lógico:", not); // false

//ternario
let edadUsuario = 18;
let mensaje = (edadUsuario >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // "Eres mayor de edad"   

//Manejo de cadenas de texto
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
let nombreUsuario = "Ademar";
let edadUsuario2 = 35;
let mensajeTemplate = `Hola, mi nombre es ${nombreUsuario} y tengo ${edadUsuario2} años.`;
console.log(mensajeTemplate); // "Hola, mi nombre es Ademar y tengo 35 años."
// Multilinea
let mensajeMultilinea = `Este es un mensaje
que ocupa varias líneas
en el código.`;
console.log(mensajeMultilinea);