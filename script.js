console.log('node.js');
// norint istraukti failu moduli is node
const fs = require('fs')
// ka sukurt, ka jame irasyt, funkcija kuria nors vykdom kai yra yrasoma failas
fs.appendFile('data.txt', 567, function(err){
    if(err) console.log(err);
    
})
// kompiliavimas
// main.scss > node / gulp > main.css  || sukuri faila 
// sass 
// gulp biblioteka/kompaileris
// node backendine kalba