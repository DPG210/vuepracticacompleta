import { createWebHistory, createRouter } from "vue-router"
import HomeComponent from "./components/HomeComponent.vue"
import LoginComponent from "./components/LoginComponent.vue"
import AlumnosToken from "./components/AlumnosToken.vue"
import SubirFichero from "./components/SubirFichero.vue"
import EquiposComponent from "./components/EquiposComponent.vue"
import DetallesDepartamento from "./components/DetallesDepartamento.vue"
import UpdateDepartamento from "./components/UpdateDepartamento.vue"
import CrearDepartamento from "./components/CrearDepartamento.vue"
import NotFound from "./components/NotFound.vue"
import DepartamentosHome from "./components/DepartamentosHome.vue"


const myRoutes=[
    {path:"/", component:HomeComponent},
    {path:"/login", component:LoginComponent},
    {path:"/alumnos", component:AlumnosToken},
    {path:"/fichero", component:SubirFichero},
    {path:"/equipo/:idequipo?", component:EquiposComponent},
    {path:"/homedepartamentos", component:DepartamentosHome},
    {path:"/crear" , component:CrearDepartamento},
    {path:"/detalles/:iddepartamento", component:DetallesDepartamento},
    {path:"/update/:iddepartamento", component:UpdateDepartamento},
    {path:"/:pathMatch(.*)*",  component:NotFound}
]

const router= createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router;