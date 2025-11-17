<template>
  <div>
    <h3>Subir Fichero</h3>
    
    <input type="file" ref="cajaFileRef" />
    
    <button @click="subirFichero()">Subir Fichero</button>

    <div v-if="urlFileUpload">
      <p>Fichero subido con éxito:</p>
      <a :href="urlFileUpload" target="_blank">{{ urlFileUpload }}</a>
    </div>
  </div>
</template>

<script>
import ServiceFicheros from "./../services/ServiceFicheros"
const service = new ServiceFicheros();

export default {
    name: "FileUploadComponent",
    data() {
        return {
            urlFileUpload: ""
        }
    },
    methods: {
        subirFichero() {
           // Accedemos al input usando 'this.$refs'
            var file = this.$refs.cajaFileRef.files[0];
            if (!file) {
                console.error("No se ha seleccionado ningún fichero.");
                return;
            }

            var ficheroNombre = file.name;

            var reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onloadend = () => {
                var dataUrl = reader.result;
                var base64 = dataUrl.split(',')[1];

                var objetoParaLaApi = {
                    fileName: ficheroNombre,
                    fileContent: base64
                };
                console.log("Enviando este objeto a la API:", objetoParaLaApi);

                service.postFile(objetoParaLaApi).then(response => {
                    console.log(response);
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

</style>
