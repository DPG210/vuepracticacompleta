<template>
  <div>
    <label for="">Numero</label><br>
    <input type="text" v-model="departamento.numero"><br>
    <label for="">Nombre</label><br>
    <input type="text" v-model="departamento.nombre"><br>
    <label for="">Localidad</label><br>
    <input type="text" v-model="departamento.localidad"><br>
    <button @click="volverHome()">Home Departamentos</button>
  </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamentos'
const service= new ServiceDepartamentos();
export default {
    name:"DetallesDepartamento",
    data(){
        return{
            
            departamento:{}
        }
    },
    mounted(){
        let id=this.$route.params.iddepartamento;
        service.findDepartamento(id).then((result)=>{
            this.departamento=result;
        })
    },
    methods:{
        volverHome(){
            this.$router.push("/homedepartamentos");
        }
    }
}
</script>

<style>

</style>