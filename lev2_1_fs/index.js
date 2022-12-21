import fs from "fs";

const promise = () => {
    
}
fs.readFile("data.json", ((err, data) => {
    if (err) return console.log("Etwas ist schief gelaufen", err);

    const objects = JSON.parse(data); // Konviert in Objekt
    let text = "";

    for (const obj of objects) {
        text += `${obj.id} - ${obj.title}\n${obj.description}\n\n`;
    }

    fs.writeFile("data.txt", text, ((err) => {
        if (err) return (console.log("ERROR", err));
        console.log("JSON Konvertiert");
    }));
}));