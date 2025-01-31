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
          Testimonio de Sara Magdalena Sánchez, madre de familia
        </h1>
        <p class="body-1 mt-3">
          Para mí, la Fundación Centro de Terapias Especiales CTE, es de gran
          apoyo, pues soy madre de una niña con discapacidad, con limitantes
          motoras que le impiden caminar y sostenerse por sí sola; sin habla, y
          gracias a las terapias que recibe en la Fundación, la niña ya
          articula algunas palabras, y periódicamente recibe terapias físicas y
          ocupacionales.
        </p>
        <p class="body-1">
          Es una bendición para las familias Tepecoyenses, contar con esta
          Fundación.
        </p>
      </v-col>
    </v-row>

    <!-- Imagen adicional -->
    <v-row justify="center" class="mt-4">
      <v-col cols="12" sm="6" md="4">
        <v-img
          src="@/assets/img1.png"
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
  name: "Tes1View",
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
