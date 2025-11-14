<template>
  <div>
    <h1>Login</h1>
    <form v-on:submit.prevent="iniciarSesion()">
        <label for="">Usuario</label><br>
        <input type="text" v-model="cajausuario"><br>
        <label for="">Contraseña</label><br>
        <input type="text" v-model="cajapassword"><br>
        <button>Login</button>
    </form>
  </div>
</template>

<script>
import ServiceAlumnos from "./../services/ServiceAlumnos";
const service= new ServiceAlumnos();
export default {
    
    name:"LoginComponent",
    data(){
        return{
            cajausuario:"",
            cajapassword:""
        }
    },
    methods:{
        iniciarSesion(){
            service.loginAlumno(this.cajausuario, this.cajapassword).then(result=>{
                localStorage.setItem("token", result);
                console.log(localStorage.getItem("token"));
                this.$router.push("/alumnos");
            })
        }
    }
}
</script>

<style>

</style>