import fs from "fs";


// 1. Erstelle einen Unterordner innerhalb deines Projektordners. In diesem Ordner soll die Datei angelegt werden.
// fs.mkdir("./Unterordner", ((err) => {
//     if (err) return console.log("ERROR", err);
// }));



// 2. Schreibe eine Funktion, die einen Parameter annimmt.
const checkingPromise = (param) => {
    return new Promise((resolve, reject) => {
        const zeilenumbruch = `${param}\n`;
        fs.writeFile("./Unterordner/test.txt", zeilenumbruch, { flag: 'a' }, ((err) => {
            if (err) return reject(err);
            else resolve();
        }));
    });
};

checkingPromise("HALLO")
    .then(() => console.log("DATEI ERSTELLT!"))
    .catch(err => console.log("ERROR:", err));






