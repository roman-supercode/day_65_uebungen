import fs from "fs";

const promise = () => {
    return new Promise((resolve, reject) => {

        fs.readFile("data.json", ((err, data) => {
            if (err) return reject(err);

            const objects = JSON.parse(data); // Konviert in Objekt
            let text = "";

            for (const obj of objects) {
                text += `${obj.id} - ${obj.title}\n${obj.description}\n\n`;
            }

            fs.writeFile("data.txt", text, ((err) => {
                if (err) return reject(err);
                else resolve();
            }));
        }));
    });
};

promise()
    .then(() => console.log("JSON Konvertiert"))
    .catch(err => console.log("Etwas ist schief gelaufen", err));