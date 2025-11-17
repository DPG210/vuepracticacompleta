<template>
  <div>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Localidad</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="departamento in departamentos" :key="departamento">
                <td>{{departamento.numero}}</td>
                <td>{{departamento.nombre}}</td>
                <td>{{departamento.localidad}}</td>
                <td>
                    <router-link :to="'/detalles/'+departamento.numero">Detalles</router-link>
                </td>
                <td>
                    <router-link :to="'/update/'+departamento.numero">Update</router-link>
                </td>
                <button @click="deleteDepartamento(departamento.numero)">Delete</button>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import ServiceDepartamentos from "./../services/ServiceDepartamentos";
const service= new ServiceDepartamentos();
export default {
    name:"DepartamentosHome",
    data(){
        return{
            departamentos:[]
        }
    },
    methods:{
        loadDepartamentos(){
            service.getDepartamentos().then((result)=>{
                this.departamentos=result;
            })
        },

        deleteDepartamento(id){
            service.deleteDepartamento(id).then(()=>{
                this.loadDepartamentos();
            })
        }
    },
    mounted(){
        this.loadDepartamentos();
    }
}
</script>

<style>

</style>