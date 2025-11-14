import { createWebHistory, createRouter } from "vue-router"
import HomeComponent from "./components/HomeComponent.vue"
import LoginComponent from "./components/LoginComponent.vue"
import AlumnosToken from "./components/AlumnosToken.vue"
import SubirFichero from "./components/SubirFichero.vue"


const myRoutes=[
    {path:"/", component:HomeComponent},
    {path:"/login", component:LoginComponent},
    {path:"/alumnos", component:AlumnosToken},
    {path:"/fichero", component:SubirFichero}
]

const router= createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router;