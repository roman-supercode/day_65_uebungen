import fs from "fs";

// 1. Erstelle einen Unterordner innerhalb deines Projektordners. In diesem Ordner soll die Datei angelegt werden.
// fs.mkdir("./Unterordner", ((err) => {
//     if (err) return console.log("ERROR", err);
// }));



// 2. Schreibe eine Funktion, die einen Parameter annimmt.
const checking = (param) => {
    const zeilenumbruch = `${param}\n`;
    fs.writeFile("./Unterordner/test.txt", zeilenumbruch, { flag: 'a' }, ((err) => {
        if (err) return console.log("ERROR:", err);
        console.log("DATEI ERSTELLT!");
    }));
};

checking("HALLO");

// fs.appendFileSync("data.txt", `\n ${ data.id } - ${ data.title }, (err) => { console.log(err); }`);





