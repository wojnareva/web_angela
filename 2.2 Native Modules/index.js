const fs = require("fs");

fs.writeFile("message.txt", "Ahoj", err => {
    if (err) throw err;
    console.log("soubor uložen");    
});
