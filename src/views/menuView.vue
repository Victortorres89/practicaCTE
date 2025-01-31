<template>
  <v-container fluid>
    <div>
      <h1 class="text-blue-darken-4" style="text-align: center;">Fundación Centro de Terapias Especiales</h1>
    </div>
    
    <v-carousel height="400px" hide-delimiter-background>
      <v-carousel-item src="../assets/cte.jpg" cover></v-carousel-item>
      <v-carousel-item src="../assets/baner.jpg" cover></v-carousel-item>
    </v-carousel>
  </v-container>

  <v-container>
    <div class="mission-vision-container">
      <div class="mission">
        <h2 class="text-blue-darken-4">Nuestra visión</h2>
        <p class="text-blue-darken-4">
          Ser una entidad que responda eficaz y efectivamente a <br />
          las necesidades de atención personalizada y con alta <br />
          sensibilidad humana, a niños, niñas y adolescentes con <br />
          discapacidades diversas, para lograr su bienestar, fisico <br />
          y sipcológico.
        </p>
      </div>

      <div class="vision">
        <h2 class="text-blue-darken-4">Nuestra misión</h2>
        <p class="text-blue-darken-4">
          Somos una fundación sin fines lucro. <br />
          Comprometida en orientar, rehabilitar <br />
          técnica y profesionalmente a niñas, niños <br />
          y adolescentes con discapacidad, para lograr <br />
          su bienestar.
        </p>
       <!--<PaypalPago />-->
      </div>
    </div>
  </v-container>

  <!-- Agregar el Footer aquí -->
  <FooterComponent />
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue'; // Asegúrate de que la ruta sea correcta
/*import PaypalPago from '../components/PaypalPago.vue';*/

export default {
  name: 'menuView',
  components: {
    FooterComponent,
    /*PaypalPago*/
  }
}
</script>

<style scoped>
/* Opcionalmente ajusta la altura según sea necesario */
.v-carousel {
  height: 100%;
}

@media (min-width: 600px) {
  .v-carousel {
    height: 400px;
  }
}

@media (max-width: 600px) {
  .v-carousel {
    height: 300px;
  }
}

.mission-vision-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.mission,
.vision {
  width: 45%;
}
</style>
