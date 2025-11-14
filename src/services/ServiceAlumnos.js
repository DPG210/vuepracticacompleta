import Global from "@/Global";
import axios from "axios";


export default class ServiceAlumnos{
    
    loginAlumno(name,password){
        return new Promise(function(resolve){
            let request="api/auth/login";
            let url= Global.urlApiEjemplos+request;
            let cuerpo ={
                userName:name,
                password:password
            }
            axios.post(url,cuerpo).then(response =>{
                resolve(response.data.response)
            })

        })
    }

    getAlumnos(){
        return new Promise (function(resolve){
            let request="api/alumnos/alumnostoken";
            let url=Global.urlApiEjemplos+request;
            let token=localStorage.getItem("token");

            let config={
                headers:{
                    'Authorization' : 'bearer ' +token
                }
            }

            axios.get(url,config).then(response=>{
                resolve(response.data)
            })
        })
    }

}