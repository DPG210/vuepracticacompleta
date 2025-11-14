import { createWebHistory, createRouter } from "vue-router"
import HomeComponent from "./components/HomeComponent.vue"
import LoginComponent from "./components/LoginComponent.vue"
import AlumnosToken from "./components/AlumnosToken.vue"
import SubirFichero from "./components/SubirFichero.vue"
import EquiposComponent from "./components/EquiposComponent.vue"


const myRoutes=[
    {path:"/", component:HomeComponent},
    {path:"/login", component:LoginComponent},
    {path:"/alumnos", component:AlumnosToken},
    {path:"/fichero", component:SubirFichero},
    {path:"/equipo/:idequipo?", component:EquiposComponent}
]

const router= createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router;