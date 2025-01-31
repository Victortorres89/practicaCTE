<template>
  <v-app>
    
    
      <v-app-bar color="primary" prominent >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>CTE</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon="mdi-home" to="/"></v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" permanent>
        <v-list>
          <v-list-item link to="/" title="home" 
        prepend-icon="mdi-home"></v-list-item>
        <v-list-item link to="/cal" title="galeria" 
        prepend-icon="mdi-image-album"></v-list-item>
        <v-list-item link to="/fon" title="Sobre nosotros" 
        prepend-icon="mdi-account-box"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!--seccion donde se cargan las vistas-->
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      drawer: true,
      group: null,
    }
  },
  watch: {
      group () {
        this.drawer = false
      },
    }
}
</script>
