<template>
    <div>
        <h1>Subir Fichero V2</h1>
        <form v-on:submit.prevent="subirFichero()">
            <label>Imagen: </label>
            <input type="file" v-on:change="cargarFichero($event)"/>
            <button>Upload</button>
        </form>
        <br/>
        <img v-if="imagen" :src="imagen"/>
    </div>
</template>

<script>
import ServiceFicheros from "./../services/ServiceFicheros"
const service = new ServiceFicheros();
export default {
    name: "FilesComponent",
    data() {
        return {
            fichero: null,
            imagen: ""
        }
    },
    methods: {
        
        cargarFichero(event) {
            this.fichero = event.target.files[0];
        },

        subirFichero() {
            if(this.fichero == null && this.fichero == undefined){
                alert("No se ha modificado el fichero");
            } else {
                let reader = new FileReader();
                reader.onload = () => {
                    let base64String = String(reader.result);
                    let base64Content = base64String.split(",")[1];
                    
                    let imagen = {
                        fileName: this.fichero.name,
                        fileContent: base64Content
                    }

                    service.postFile(imagen).then(result => {
                        console.log(result);
                        alert("Imagen subida correctamente");
                    })

                    this.imagen = reader.result;
                }
                reader.readAsDataURL(this.fichero);
            }
        }
    }
}
</script>

<style>

</style>