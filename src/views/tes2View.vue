<template>
  <v-container class="pa-4" fluid>
    <!-- Banner -->
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-img
          src="@/assets/baner.jpg"
          alt="Banner"
          aspect-ratio="3.33"
          class="rounded-lg"
        />
      </v-col>
    </v-row>

    <!-- Título y contenido -->
    <v-row justify="center" class="mt-4">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="text-h5 text-md-h4 font-weight-bold">
          Testimonio de Sara Margarita Pérez, madre de familia
        </h1>
        <p class="body-1 mt-3">
          Soy madre de un niño con parálisis cerebral, vivo en Tepecoyo, me
          siento muy agradecida con el personal que conforma la Fundación Centro
          de Terapias Especiales, porque son muy responsables, atentos y muy
          formales en el que hacer del CTE. La fisioterapeuta que atiende a mi
          niño, es muy tierna en su trato y muy profesional. Es lo mejor que le
          ha podido pasar a Tepecoyo, que exista una Fundación de esta
          naturaleza.
        </p>
      </v-col>
    </v-row>

    <!-- Imagen adicional -->
    <v-row justify="center" class="mt-4">
      <v-col cols="12" sm="6" md="4">
        <v-img
          src="@/assets/img2.jpg"
          alt="Imagen de testimonio"
          aspect-ratio="1"
          class="rounded-lg"
        />
      </v-col>
    </v-row>

    <!-- Footer -->
    <v-row>
      <v-col cols="12">
        <FooterComponent />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "Tes2View",
  components: {
    FooterComponent,
  },
};
</script>

<style scoped>
/* Personaliza los espacios y estilos si es necesario */
.text-h5 {
  font-size: 1.25rem;
}
.text-md-h4 {
  font-size: 1.5rem;
}
</style>
