<template>
    <div id="app">
      <div class="container my-3">
        
        <div class="row">
          <!-- Logo -->
          <div class="logo d-flex justify-content-center">
            <img alt="Vue logo" src="./assets/logo.png">
          </div>
          <!-- Title -->
          <div class="title d-flex justify-content-center">
            <h1 class="fw-bold">GALERIE PHOTOS</h1>
          </div>
        </div>

        <!-- gallery -->
        <div class="row gallery-bg pt-4 mt-5">
          <!-- cards -->
          <div v-for="el in listFish" :key="el.id" class="col-md-2 mb-4">
            <div class="card">
              <img :src="el.url" :alt="el.title" class="photo card-img-top ">
              <div class="card-body">
                <p class="card-title">{{ el.title }}</p>
              </div>
            </div>
          </div>
        </div>

    </div>
  </div> <!-- /app -->
</template>

<script>
  import photos from './assets/photos.json'; 

  export default {
    name: 'App',
    data() {
      return {
        listFish: photos,
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

  .gallery-bg {
    background-color: #004e64;
  }

 .photo {
  width: 100vh;
  height: 10vw;
  object-fit: cover;
 }

 @media (max-width: 768px) {
  .photo {
    width: 100%; 
    height: auto;  
  }
}

</style>
