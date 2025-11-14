import Global from "@/Global";
import axios from "axios";

export default class ServiceFicheros {
    
    /**
     * Sube un fichero (nombre y base64) a la API
     * @param {object} fileModel - Objeto con { nombre, base64 }
     */
    postFile(fileModel) {
        return new Promise(function(resolve, reject) {
            let request = "api/testingfiles";
            
            let url = Global.urlApiFiles + request; 

            let config = {
                headers: {
                    "Content-type": "application/json"
                }
            };

            // 'fileModel' es el 'cuerpo' de la petición
            axios.post(url, fileModel, config)
                .then(response => {
                    // Resolvemos con la data completa, 
                    // el componente buscará 'response.urlFile'
                    resolve(response.data);
                })
                .catch(error => {
                    // Es importante 'rechazar' la promesa si falla,
                    // para que el 'try/catch' del componente funcione.
                    console.error("Error en postFile:", error);
                    reject(error);
                });
        });
    }

}

// /** Con FETCH
//  * Envía el modelo del fichero a la API
//  * @param {object} fileModel - Objeto con { nombre, base64 }
//  */
// export async function postFile(fileModel) {
//     // 1. Convertir el objeto a JSON
//     const json = JSON.stringify(fileModel);

//     // 2. Definir las cabeceras
//     const headers = {
//         "Content-type": "application/json"
//     };

//     // 3. Hacer la petición POST con fetch
//     const response = await fetch(API_URL, {
//         method: 'POST',
//         headers: headers,
//         body: json
//     });

//     if (!response.ok) {
//         throw new Error("Error al subir el fichero: " + response.statusText);
//     }

//     // 4. Devolver la respuesta en formato JSON
//     return response.json();
// }