
<template>
  <div class="row" style="text-align: center;">
        <div class="alert alert-primary">
    <h2 class="text-blue-darken-4">Quienes somos</h2>
    <p>Somos una ONG no lucrativa, nacimos a la vida legal como Fundación Centro de Terapias<br>
       Especiales CTE, el 3 de noviembre de 2023, mediante Decreto Ejecutivo No.31, publicado<br> 
       en el Diario Oficial, páginas 13-19, Tomo 441 No. 206.</p><br> 
    <h2>Nos ubicamos</h2>
    <p>Estamos ubicados, en la casa #2, 1ra.C. Ote., Cantón<br> 
      Los Alpes, del Distrito de Tepecoyo, Departamento de<br> 
      La Libertad, El Salvador Centroamérica.</p><br>
      <h2>Historia</h2>
    <p>Nacimos con el fin de:</p>

<p>Desarrollar programas encaminados a la atención de personas con discapacidad, específicamente a<br> 
  niños y niñas de 0 a 12 años de edad; a adolescentes de 12 a 18 años de edad, y adultos de 18 a 21 años de edad.</p><br>
 <p>Brindar atención psicológica y capacitación especializada a cuidadores de personas discapacitadas,<br>
  en los rangos de edades descritos en el párrafo anterior.</p><br>
<p>Ofrecer terapias motoras, psicomotoras y educación especial.
</p>
<h2>Email</h2>
<p>cte.77elsalvadorca@gmail.com</p><br>
<h2>Telefono</h2>
<p>503 60393872</p>
</div>
</div>

<!-- Agregar el Footer aquí -->
<FooterComponent/>

</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: "fonView",
  components: {
    FooterComponent,
  }
};
</script>

<style scoped></style>
