import Global from "@/Global";
import axios from "axios";

export default class ServiceDepartamentos{

    getDepartamentos(){
        return new Promise(function(resolve){
            let request="api/departamentos";
            let url=Global.urlApiDepartamentos+request;
            axios.get(url).then(response=>{
                resolve(response.data);
            })
        })
    }

    crearDepartamento(departamento){
        return new Promise(function(resolve){
            let request="api/departamentos";
            let url=Global.urlApiDepartamentos+request;
            axios.post(url,departamento).then(response=>{
                resolve(response);
            })
        })
      
    }

    findDepartamento(id){
        return new Promise(function(resolve){
            let request="api/departamentos/"+ id;
            let url= Global.urlApiDepartamentos+request;

            axios.get(url).then(response=>{
                resolve(response.data);
            })
        })
    }

    updateDepartamento(departamento){
        return new Promise(function(resolve){
            let request="api/departamentos/";
            let url= Global.urlApiDepartamentos+request;

            axios.put(url,departamento).then(response=>{
                resolve(response);
            })
        })
    }

    deleteDepartamento(id){
        return new Promise(function(resolve){
            let request="api/departamentos/"+ id;
            let url= Global.urlApiDepartamentos+request;

            axios.delete(url).then(response=>{
                resolve(response);
            })
        })
    }
}