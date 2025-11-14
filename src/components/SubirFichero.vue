<template>
  <div>
    <h3>Subir Fichero (Estilo Options API)</h3>
    
    <input type="file" ref="cajaFileRef" />
    
    <button @click="subirFichero()">Subir Fichero</button>

    <div v-if="urlFileUpload">
      <p>Fichero subido con éxito:</p>
      <a :href="urlFileUpload" target="_blank">{{ urlFileUpload }}</a>
    </div>
  </div>
</template>

<script>
// 1. Importamos el servicio
import ServiceFicheros from "./../services/ServiceFicheros"
// 2. Creamos la instancia del servicio (igual que haces tú)
const service = new ServiceFicheros();

export default {
    name: "FileUploadComponent",
    // 3. 'urlFileUpload' va en data() para ser reactiva
    data() {
        return {
            urlFileUpload: ""
        }
    },
    // 4. Todos los métodos van dentro del objeto 'methods'
    methods: {
        subirFichero() {
            // 5. Accedemos al input usando 'this.$refs'
            var file = this.$refs.cajaFileRef.files[0];
            if (!file) {
                console.error("No se ha seleccionado ningún fichero.");
                return;
            }

            var ficheroNombre = file.name;

            // 6. La lógica de FileReader es idéntica
            var reader = new FileReader();
            reader.readAsDataURL(file);

            // Usamos una función de flecha para que 'this' 
            // siga siendo el componente Vue
            reader.onloadend = () => {
                var dataUrl = reader.result;
                var base64 = dataUrl.split(',')[1];

                // 7. Creamos el objeto "al vuelo", tal como te gusta
                var objetoParaLaApi = {
                    fileName: ficheroNombre,
                    fileContent: base64
                };
                console.log("Enviando este objeto a la API:", objetoParaLaApi);

                // 8. Llamamos al servicio y usamos .then()
                //    (exactamente igual que en tu LoginComponent)
                service.postFile(objetoParaLaApi).then(response => {
                    console.log(response);
                    // 9. Actualizamos la variable de data() usando 'this'
                    this.urlFileUpload = response.urlFile;
                }).catch(error => {
                    console.error("Error en la subida:", error);
                });
            };
        }
    }
}
</script>

<style>
/* Tus estilos aquí */
</style>