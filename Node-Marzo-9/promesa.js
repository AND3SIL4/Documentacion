let promesaCumplida = Boolean(Math.round(Math.random())); 
console.log(promesaCumplida);

if(promesaCumplida){
    promesaCumplida=true
}else{
    promesaCumplida=true
}

const miPromesa = new Promise((resolve, reject,) => {
    setTimeout(() =>{
        if (promesaCumplida){
            resolve('Cara...')
        }else{
           reject('Sello...')
        }
    });
});
miPromesa.then((moneda) => {
    console.log(moneda);
}).catch((err) => {
    console.log(err);
});
