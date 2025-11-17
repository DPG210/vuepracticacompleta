<template>
  <div>
    <form action="" v-on:submit.prevent="crearDepartamento()">
       
        <label for="">Numero</label><br>
        <input type="number" v-model="departamento.numero"><br>
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
    name:"CrearDepartamento",
    data(){
        return{
            departamento:{
                numero:0,
                nombre:"",
                localidad:""
            }
        }
    },
    methods:{
        crearDepartamento(){
            service.crearDepartamento(this.departamento).then(()=>{
                this.$router.push("/homedepartamentos");
            })
        }
    }
}
</script>

<style>

</style>