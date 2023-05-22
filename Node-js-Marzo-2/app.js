const fs = require('fs');
const http = require('http'); 

//Create file fs.appendFile() 

 /*fs.appendFile('myNewTextFile1.txt', 'Texto contenido en el archivo', function(err){ 

    if(err)throw err; 

    console.log('File saved'); 

});*/

//Todo: create file whith fs.open()

/*fs.open('myNewTextfile2.text', 'w', function (err, file) {
    if (err) throw err;
    console.log('File saved');
});*/

//fs.writeFile Reemplaza el archivo y el contenido, no tiene control z

/*fs.writeFile('myNewTextFile3.txt', 'Hello Node.js File saved', function(err){
    if (err) throw err;
    console.log('File saved');
});*/

//fs.oppendFile()

/*fs.appendFile('myNewTextFile2.txt', 'this is a new content', function(err){
    if (err) throw err;
    console.log('File updated');
});*/

/*fs.writeFile('myNewTextFile3.txt', 'This is a new content for the file 3', function(err){
    if (err) throw err;
    console.log('File replaced');
});*/

/*fs.unlink('myNewTextFile2.txt', function (err){
    if (err) throw err;
    console.log('File deleted');
});*/

/*fs.rename('renameFile', 'myNewTextFile1.txt', function(err){
    if (err) throw err;
    console.log('File renamed');
});*/

