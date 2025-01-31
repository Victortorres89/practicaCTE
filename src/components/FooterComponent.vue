<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Imágenes con botones alineados -->
      <div class="images">
        <div class="image-button">
          <img :src="require('@/assets/img1.png')" alt="Image 1" class="small-image" />
          <v-list-item link to="/tes1" title="ver testimonio" prepend-icon="mdi-home"></v-list-item>
        </div>
        <div class="image-button">
          <img :src="require('@/assets/img2.jpg')" alt="Image 2" class="small-image" />
          <v-list-item link to="/tes2" title="ver testimonio" prepend-icon="mdi-account"></v-list-item>
        </div>
      </div>

      <!-- Redes sociales -->
      <div class="social-links">
        <a href="https://www.facebook.com/profile.php?id=61556460271444&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <img :src="require('@/assets/face.jpg')" alt="Facebook" class="social-icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img :src="require('@/assets/xlogo.png')" alt="Twitter" class="social-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img :src="require('@/assets/instagram-icon.png')" alt="Instagram" class="social-icon" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.images {
  display: flex; /* Cambiar de columna a fila */
  gap: 20px; /* Separar las imágenes y botones */
  justify-content: center; /* Centrar horizontalmente */
  align-items: center; /* Centrar verticalmente */
  margin-bottom: 20px;
}

.image-button {
  display: flex; /* Alinear la imagen y el botón en fila */
  flex-direction: column; /* Colocar imagen y botón en columna */
  align-items: center; /* Centrar contenido */
}

.small-image {
  width: 80px;
  margin-bottom: 10px; /* Espaciado entre imagen y botón */
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px; /* Espaciado entre iconos */
}

.social-icon {
  width: 50px;
}
</style>
