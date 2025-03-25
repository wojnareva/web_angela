/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import fs from fs;
import inquirer from 'inquirer';
import qr-image from 'qr-image';

// 1

// 2


// 3
fs.writeFile("message.txt", odkaz, err => {
    if (err) throw err;
    console.log("odkaz uložen");
})