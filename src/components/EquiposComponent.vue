<template>
  <div class="page-background">
    <div class="container mt-4">

      <div v-if="cargando" class="d-flex justify-content-center p-5 loading-screen">
        <div>
          <img src="/assets/images/mifoto.jfif" alt="Cargando...">
          <h3 class="loading-text">Cargando...</h3>
        </div>
      </div>

      <div v-else-if="!cargando && datosEquipo" class="row g-4 g-lg-5">

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 80px; z-index: 1;">
            <div class="card shadow card-equipo">
              <img :src="datosEquipo.equipo.imagen" class="card-img-top team-logo" :alt="datosEquipo.equipo.nombre">
              
              <div class="card-body">
                <h4 class="card-title team-name">{{ datosEquipo.equipo.nombre }}</h4>
                <p class="card-text team-description">{{ datosEquipo.equipo.descripcion }}</p>
              </div>
              
              <ul class="list-group list-group-flush team-details">
                <li class="list-group-item d-flex justify-content-between">
                  <strong>Champions:</strong>
                  <span>{{ datosEquipo.equipo.champions }}</span>
                </li>
                <li class="list-group-item">
                  <a :href="datosEquipo.equipo.web" class="btn btn-primary w-100" target="_blank" rel="noopener noreferrer">
                    Sitio Web
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <h3 class="section-title">Plantilla</h3>

          <div v-if="datosEquipo.jugadores && datosEquipo.jugadores.length > 0">
            
            <div class="player-grid">
              
              <div v-for="jugador in datosEquipo.jugadores" :key="jugador.idJugador" class="card shadow-sm player-card">
                <img :src="jugador.imagen" class="card-img-top player-image" :alt="jugador.nombre">
                
                <div class="card-body p-3">
                  <h6 class="card-title player-name">
                    {{ jugador.nombre }}
                  </h6>
                  <small class="text-muted player-position">
                    {{ jugador.posicion }}
                  </small>
                </div>
              </div> </div> </div>
          <div v-else class="alert alert-light text-center">
            No se encontraron jugadores para este equipo.
          </div> </div> </div> </div> </div> </template>

<script>
// El script y la lógica siguen siendo exactamente los mismos
import ServiceEquipos from './../services/ServiceEquipos';
const service = new ServiceEquipos();

export default {
  name: "EquiposDetalle",
  data() {
    return {
      cargando: true,
      datosEquipo: null 
    }
  },
  mounted() {
    const id = parseInt(this.$route.params.idequipo);
    this.cargarDatosEquipo(id);
  },
  watch: {
    '$route.params.idequipo'(newId, oldId) {
      if (newId !== oldId) {
        this.cargarDatosEquipo(parseInt(newId));
      }
    }
  },
  methods: {
    cargarDatosEquipo(id) {
      this.cargando = true;
      let equipoPromise = service.getEquipo(id);
      let jugadoresPromise = service.getJugadores(id);

      Promise.all([ equipoPromise, jugadoresPromise ])
        .then(response => {
          this.datosEquipo = {
            equipo: response[0],
            jugadores: response[1]
          };
          this.cargando = false;
        }).catch(error => {
          console.error("Error al cargar datos:", error);
          this.cargando = false;
        });
    }
  }
}
</script>

<style scoped>
/* --- Fondo y Estilo General --- */
.page-background {
  background-color: #f4f7f6; /* Un gris muy claro, no blanco puro */
  min-height: calc(100vh - 56px);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.loading-screen {
  text-align: center;
}
.loading-text {
  color: #333;
  margin-top: 15px;
}

.section-title {
  font-weight: 700;
  color: #222;
  text-transform: uppercase; /* Estilo "deportivo" */
  letter-spacing: 0.5px;
  border-bottom: 3px solid #0d6efd; /* Azul primario de Bootstrap */
  padding-bottom: 8px;
  margin-bottom: 25px;
}

/* --- Tarjeta Base (limpiamos el default de Bootstrap) --- */
.card {
  border: none;
  border-radius: 12px; /* Esquinas más suaves */
  box-shadow: 0 4px 15px rgba(0,0,0,0.07);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

/* --- Tarjeta del Equipo --- */
.card-equipo {
  text-align: center;
}

.team-logo {
  max-height: 200px;
  width: auto;
  object-fit: contain;
  padding: 20px;
  background-color: #fdfdfd;
  margin: 15px;
  border-radius: 8px;
}

.team-name {
  font-size: 1.75rem; /* Más grande y legible */
  font-weight: 700;
  color: #000;
  margin-bottom: 10px;
}

.team-description {
  font-size: 0.95rem; /* Más pequeño para no dominar */
  color: #555;
  line-height: 1.6;
}

.team-details .list-group-item {
  font-size: 1rem;
  color: #333;
}

.team-details strong {
  color: #000;
}

/* --- Rejilla de Jugadores (LA CLAVE) --- */
.player-grid {
  display: grid;
  /* Esto es responsive: 
    - Crea columnas que tengan un MÍNIMO de 140px.
    - Crea TANTAS como quepan (auto-fill).
    - El espacio sobrante se reparte (1fr).
  */
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 20px; /* Espacio entre tarjetas */
}

.player-card {
  /* La tarjeta ocupará el espacio que le da el Grid */
  width: 100%;
  text-align: center;
}

.player-image {
  width: 100%;
  aspect-ratio: 1 / 1; /* Imagen perfectamente cuadrada */
  object-fit: cover; /* Recorta la imagen para que llene el cuadrado */
}

.player-name {
  font-weight: 600;
  color: #111;
  font-size: 1rem;
  margin-bottom: 0;
  white-space: nowrap; /* Evita que el nombre parta en dos líneas */
  overflow: hidden;
  text-overflow: ellipsis; /* Pone "..." si el nombre es muy largo */
}

.player-position {
  /* ¡AHORA SÍ SE VE! */
  font-size: 0.9rem;
  color: #666; /* Gris estándar, alto contraste sobre blanco */
  font-weight: 500;
}

/* --- Ajustes para Móvil (Bootstrap ya hace mucho) --- */
@media (max-width: 575px) {
  .player-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 15px;
  }
  .team-name {
    font-size: 1.5rem;
  }
}
</style>