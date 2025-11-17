<template>
  <div>
    <form action="" v-on:submit.prevent="updateDepartamento()" v-if="departamento">
       
        <label for="">Numero</label><br>
        <input type="text" v-model="departamento.numero" disabled><br>
        <label for="">Nombre</label><br>
        <input type="text" v-model="departamento.nombre"><br>
        <label for="">Localidad</label><br>
        <input type="text" v-model="departamento.localidad"><br>
        <button>Crear</button>

    </form>
  </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamentos'
const service= new ServiceDepartamentos();
export default {
    name:"UpdateDepartamento",
    data(){
        return{
            departamento:null
        }
    },
    methods:{
        updateDepartamento(){
            service.crearDepartamento(this.departamento).then(()=>{
                this.$router.push("/homedepartamentos");
            })
        }
    },
    mounted(){
        let id=this.$route.params.iddepartamento;
        service.findDepartamento(id).then((result)=>{
            this.departamento=result;
        })
    }

}
</script>

<style>

</style>