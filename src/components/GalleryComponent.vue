<template>
  <!-- gallery -->
    <div class="row gallery-bg pt-4 mt-2">
        <div v-for="el in listFish" :key="el.id" class="col-md-4 mb-4">
            <!-- Link to /fish/:id for each fish -->
            <router-link :to="{ name: 'fish', params: { id: el.id }}" class="text-decoration-none">
                <div class="card">
                    <img :src="el.url" :alt="el.title" class="photo card-img-top">
                    <div class="card-body">
                        <p class="card-title">{{ el.title }}</p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
  import photos from '../assets/photos.json'; 


  export default {
    name: 'GalleryComponent',
    data() {
      return {
        listFish: photos,
      } 
    },
  }
</script>

<style scoped>
  .gallery-bg {
    background-color: #004e64;
    padding: 15px;
  }

  .photo {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .photo {
      width: 100%; 
      height: auto;  
    }
  }

  .card {
    border: none;
    border-radius: 8px;
    overflow: hidden;
  }

  .card-body {
    padding: 10px;
  }
</style>

