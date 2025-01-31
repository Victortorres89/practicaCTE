<template>
  <h1 class="text-blue-darken-4" style="text-align: center;">Galeria</h1>
  <h2 class="text-blue-darken-4" style="text-align: center;">Carrusel de imagenes del programa de terapias fisicas</h2>
    <v-carousel>
  <v-carousel-item
    src="../assets/f1.jpeg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../assets/f2.jpeg"
    cover
  ></v-carousel-item>
  <v-carousel-item
    src="../assets/f3.jpeg"
    cover 
  ></v-carousel-item>
  <v-carousel-item
    src="../assets/f4.jpeg"
    cover 
  ></v-carousel-item>
</v-carousel>

<!-- Agregar el Footer aquí -->
<FooterComponent/>

  </template>
  
    
<script>
import FooterComponent from '@/components/FooterComponent.vue';

export default{
    name: 'calView',
    components: {
    FooterComponent,
  }
}
</script>
    
<style scoped>
    
</style>