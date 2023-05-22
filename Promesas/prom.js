let nombre = prompt ('Ingrese su nombre: ')
let edad = prompt('Ingrese su edad: ');

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(edad>=18){
            resolve(`${nombre}, usuario autorizado para ingresar...`)
        }else{
          if (edad<=18){
            reject(`${nombre}, usuario NO autorizado para ingresar...`)
          }else {
            reject(`Datos no validos para ingreso de usuario: ${nombre}...`)
          }
        }
    }, 200);
});

miPromesa.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});