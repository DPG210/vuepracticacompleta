<template>
  <div>
    <ul>
        <li v-for="alumno in alumnos" :key="alumno">{{alumno.nombre}}</li>
    </ul>
  </div>
</template>

<script>
import ServiceAlumnos from '@/services/ServiceAlumnos'
const service= new ServiceAlumnos();
export default {
    name:"AlumnosToken",
    data(){
        return{
            alumnos:[]
        }
    },
    mounted(){
        if(localStorage.getItem("token")==null){
            this.$router.push("/login")
        }else{
            service.getAlumnos().then(result=>{
            this.alumnos=result;
        })
        }

        
    }
}
</script>

<style>

</style>