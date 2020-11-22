/**Affichage utilisateur dans bdd user.json */
const net       = require('net')
const express = require('express');
const fs        = require('fs');


const server = net.createServer((socket) => {
    console.log('new connection')
    
    socket.on('data', (data) =>{
        const [directive, parameter] = data.toString().split(' ')

        switch(directive){
            case 'USER':
                
            let fichier = fs.readFileSync('user.json')
            let personne = JSON.parse(fichier)
            console.log(personne)

     

                socket.write('200 seccessfuly connected')
                break;
        }
    })


    // Read the contents of the directory /usr/local/bin asynchronously.
    // The callback will be invoked once the operation has either completed
    // or failed.
    fs.readdir('/usr/local/bin', (err, files) => {
      // On error, show it and return
      if(err) return console.error(err);
    
      // files is an array containing the names of all entries
      // in the directory, excluding '.' (the directory itself)
      // and '..' (the parent directory).
    
      // Display directory entries
      console.log(files.join(' '));
    });

    socket.write('Hello World !')
})

server.listen(4000, () => {
    console.log('Server started at port 4000')
})