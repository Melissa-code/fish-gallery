<template>
    <div id="app">
      <div class="container my-3">
        
        <div class="row">
          <!-- Logo -->
          <div class="logo d-flex justify-content-center">
            <img alt="Vue logo" src="./assets/logo.png" id="logo-vue">
          </div>
          <!-- Title -->
          <div class="title d-flex justify-content-center align-items-center">
            <div v-if="!isHomePage" 
            @click="retourNavigation" 
            class="btn btn-custom me-4">
              Retour
            </div>
            <h1 class="fw-bold">Galerie photos</h1>
          </div>
        </div>

        <!-- Display GalleryComponent or FishComponent based on the route --> 
        <router-view></router-view>

    </div>
  </div> <!-- /app -->
</template>

<script> 

  export default {
    name: 'App',
    data() {
      return {
      } 
    },
    computed: {
        // check if it's the home page
        isHomePage() {
            return this.$route.path === '/';
        }
    },
   methods: {
        retourNavigation: function() {
            this.$router.push('/')
        }, 

        checkIfHome: function() {
          let url = ""
          if (url === "http://localhost:8080/") { 
            return true
          } else {
            return false
          }
        }
    }, 
  }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .body {
    height: 100%;
    box-sizing: border-box;
    background-color: #9fffcb;
    font-family: "Host Grotesk", sans-serif;
    font-optical-sizing: auto;
  }

  .container {
    background-color: white;
    padding: 0;
    margin: 0;
  }

  #logo-vue {
    width: 5rem;
  }

  .btn-custom {
    background-color: #7AE582!important;
  }
</style>
