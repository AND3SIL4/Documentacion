// alert("Hola mundo again")
// String --> text
// Boolean --> True or False
// Int -->  Numbers 
// Float --> Decimal numbers
// Null --> Is null
// Undefined --> Is not defined
// Object --> Is a collection of data
// Array --> Is a collection of data
// Function --> Is a collection of data
// Symbol --> Is a collection of data
// \ para tener uns string con ambas comillas
// + for concat
// === or !== logic operators 

console.log("Hello universe");
console.log('He said \'Hola\'');
console.log('Esto esta muy bacano');
console.log("Hola" + "mundo");
function sum(){
    number_one = 4
    number_two = 1
    return number_one + number_two 
}
let number = sum()
console.log(number);

let equal = "rubi" === "javascript"
console.log(equal);

// VARIABLES
// Variables should start with simbols like $ or _ or <name> for example: $name or _name or name 
// Word reserved can use like variables 
// It's good to use camelCase for variables
// For reasing a variable only needed to use the name's variable
let nombre = "Rubi"
console.log("Hola" + " " + nombre);

// CONDITIONALS 
// if (condition) {body}
// && --> and 
// || --> or 
// ! negative form 
let num = 7;

if(num > 7 || num < 7){
    console.log("Older 7");
}else{
    console.log("Doesn't correspond");
}
// Terniary operators 
// <condición> ? <expr1> : <expr2> 
let numb = 10;
number = 10 ? console.log("It's equal o greater than 10") : console.log("It's diferent than 10");

// Functions 
// Functions should start with $ or _
function hello (name){
    console.log(name);
    return name;
}
console.log(hello("Hello function"));

// CYLCES AND LOOPS  
// While (condition) {body}
// For (condition) {body}

let i = 0;
while (i < 10) {
    console.log("Hola mundo");
    i = i + 1;
}
while (true) {
    console.log("Hola While");
    break
}

// Inicializacion --> let i = 0 ;
// Condicion --> i > 5 ;
// Incremento --> i++ ;
for(let i = 0; i <5; i++){
console.log("Hello for");
}
for(let x = 10; x <= 20; x = x+2){
    console.log(x);
}
let y = 100;
while(y > 0){
    console.log(y);
    y --;
}
// ARRAYS --> it is a type of date 
// Length --> Longitud del array 
// Push --> Insert element array at the end 
// Splice --> Insert element array in determinate position 
    // for insert splice get three elements (possition, ever 0, objects to add )
// Splice also for delet elements 
    // for remove elements splice get two elements (possition to remove, amount to remove  )
let array = [1, "Pedro", true, false, "Juan"]
array[0] = "Andres";
for (let m = 0; m < array.length; m ++){
    console.log(array[m]);
}
array.push("Silva");
array.push(21);

for (let m = 0; m < array.length; m ++){
    console.log(array[m]);
}

array.splice(2/*possition to add*/,0 /* forever 0*/,"Andres" /*Object to add*/)// Add
array.splice(0/*possition to deleremove*/, 1 /*amount to remove*/) //Delete

// CADENAS DE STRINGS
// split to transform a string in an array 
// join to unite to objects in an array
// toLowerCase() 
// toUpperCase()
// startsWith() --> saber si una cadena comienza con una subcadena
// endsWith() --> saber si una cadena termina con una subcadena
// substr --> Recibe dos parametros para extraer una parte del string
// replace --> reemplazar 
// includes --> incluir 
// iteration with for 
let name = "Andres";
console.log(name.length);
console.log(name[0]);

for(nm = 0; nm < name.length; nm ++){
    console.log(name[nm]);
}

console.log(name.split(""));
console.log(name.split(" "));

ape = ["Felipe", "Silva"]
console.log(ape.join(" "));

letter = "Hola zy"

console.log(letter.toUpperCase());
console.log(letter.toLowerCase());

// OBJECTS OR DICTIONARYS --> KEY: VALUE 
// delete for remove an propiety of the object 

let $person = {
    nombre: "Andres",
    age: 21,
    las_name: "Silva"
}

console.log($person["nombre"]);

for (let key in $person) {
    if ($person.hasOwnProperty(key)) {
      console.log($person[key])
    }
  }

let llaves = Object.keys($person);
for (let i=0; i < llaves.length; i++) {
    let llave = llaves[i];
    console.log($person[llave]);
}

let person = {
    name: "Pedro",
    sayHi: function() {
      console.log("Hola, me llamo " + this.name);
    }
}

console.log(person.sayHi);

let products = [
    { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
    { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
    { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
  ];
  
  for (let i=0; i < products.length; i++) {
    let product = products[i];
    console.log(product.name);
    console.log("  Id: " + product.id);
    console.log("  Precio: " + product.price);
    console.log("  Categorías: " + product.categories.join(", "));
  }

// COMMONS MISTAKES
// No decalar la funcion, y usar parametros 
function suma(x, y) {
    return x + y;
  }
// Imprimir en vez de retornar
// con console.log() pues de hacerlo el valor retornado será undefined.
function suma(x, y) {
    return (x + y);
  };
  
  const edad = suma(2, 4);
  console.log(`Nayib tiene ${edad} años`);// Nayib tiene 6 años
// Quemar los valores y no usar los parámetros de la función
function suma(x, y) {
    return 2 + 4;// no estás usando el valor asignado a los parámetros sino retornando los que "quemaste"
  }
  
  console.log(suma(5, 5))// retorna 6 y debería retornar 10
// Retornar el valor incorrecto
// Escribe una función agregar que recibe como parámetro un arreglo y un número. La función debe retornar un nuevo arreglo cuyos elementos son aquellos elementos del arreglo y el número que pasas como parámetro a la función.
function agregar(arr, num) {
    let resultado = [];
  
    for (let i = 0; i < arr.length; i++) {
      resultado.push(arr[i]);
    }
  
    resultado.push(num);
  
    return resultado;
  };
  
  console.log(agregar([1, 2, 3], 4))// [1, 2, 3, 4]
  console.log(agregar([2, 4, 6, 8], 10))// [2, 4, 6, 8, 10]





