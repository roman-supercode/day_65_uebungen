import { rejects } from "assert";
import fs from "fs";
import { resolve } from "path";


//    1. Öffne die Datei blog1.txt
// const promiseOne = () => {
//     return new Promise((resolve, reject) => {
//         fs.readFile("blog1.txt", (err) => {
//             err ? reject(err) :
//                 resolve();
//         });
//     });
// };

// promiseOne()
//     .then(() => console.log("alles okay"))
//     .catch(err => console.log(err));

//    2. Ändere den Inhalt (Text) in der Datei blog1.txt
// const inhalt = "Das ist der abgeänderte Text";
// const promiseTwo = new Promise((resolve, reject) => {
//     fs.writeFile('blog1.txt', inhalt, ((err) => {
//         if (err) reject(err);
//         else resolve();
//     }));
// });

// promiseTwo
//     .then(() => console.log("Inhalt überschrieben!"))
//     .catch((err) => console.log("Error Ausgabe Nr. 2:", err));

//    3. Erstelle eine neue Datei „blog2.txt“ und schreibe etwas in sie hinein
// const promiseThree = () => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('blog2.txt', "Hallo du!", { flag: "wx" }, ((err) => {
//             // flag: "wx" gibt einen Error aus, wenn die Datei bereits existiert!
//             err ? reject(err)
//                 : resolve();
//         }));
//     });
// };

// promiseThree()
//     .then(() => console.log("alles gut"))
//     .catch((err) => console.log("Error Ausgabe Nr. 3:", err));

//    4. Erstelle einen neuen Ordner „assets“.
// const promiseFour = () => {
//     return new Promise((resolve, reject) => {
//         fs.mkdir("./assets", ((err) => {
//             err ? reject(err) :
//                 resolve();
//         }));
//     });
// };

// promiseFour()
//     .then(() => console.log("Ordner erstellt!"))
//     .catch((err) => console.log("Error Ausgabe Nr. 4", err));

//    5. Existiert der Ordner „assets“ bereits? Dann lasse ihn wieder löschen.
// https://stackoverflow.com/a/73837504/20360318
// const promiseFive = () => {
//     return new Promise((resolve, reject) => {
//         fs.rm("./assets", { recursive: true, force: true }, ((err) => {
//             err ? reject(err)
//                 : resolve();
//         }));
//     });
// };

// promiseFive()
//     .then(() => console.log("Ordner gelöscht!"))
//     .catch((err) => console.log("Error Ausgabe Nr. 5", err));


//    6. Erstelle eine Datei namens „delete.txt“.
// const promiseSix = () => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile("delete.txt", "", { flag: 'wx' }, ((err) => {
//             err ? reject(err)
//                 : resolve();
//         }));
//     });
// };

// promiseSix()
//     .then(() => console.log("Datei erstellt!"))
//     .catch((err) => console.log("Error Ausgabe Nr. 6", err));

//    7. Lösche die Datei „delete.txt“, wenn sie bereits existiert.
// const promiseSeven = () => {
//     return new Promise((resolve, reject) => {
//         fs.unlink("./delete.txt", ((err) => {
//             if (err) return reject(err);
//             else resolve();
//         }));
//     });
// };

// promiseSeven()
//     .then(() => console.log("Datei entfernt!"))
//     .catch((err) => console.log("Error Ausgabe Nr. 7", err));

//    8. Erstelle eine Datei namens „Hello.txt“ und füge ihr Text hinzu. Benenne sie dann in „HelloWorld.txt“ um.
const promisesEight = () => {
    return new Promise((resolve, reject) => {
        fs.writeFileSync("Hello.txt", "Hello WORLD!", ((err) => {
            if (err) return reject(err);
            else resolve();
        }));

        fs.rename("Hello.txt", "HelloWorld.txt", ((err) => {
            if (err) return reject(err);
            else resolve();
        }));
    });
};

promisesEight()
    .then(() => console.log("Datei mit Inhalt erstellt!"))
    .then(() => console.log("Datei umbenannt"))
    .catch((err) => console.log("Error Ausgabe Nr. 8", err));

