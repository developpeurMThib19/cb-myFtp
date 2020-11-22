const fs = require('fs');


fs.readdir('/usr/local/bin', (err, files) => {
  
  if(err) return console.error(err);


  console.log(files.join(' '));
});

