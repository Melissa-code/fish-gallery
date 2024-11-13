<template>
    <div class="fish-details container mt-md-5">
        <div class="row">
            <div class="col-md-8 mx-auto my-5">
                <div class="card d-flex flex-row align-items-center">
                    <!-- Image -->
                    <img :src="fish.url" :alt="fish.title" class="fish-image card-img w-50">
                    
                    <!-- Details -->
                    <div class="card-body">
                        <h3 class="card-title">{{ fish.title }}</h3>
                        <p class="card-text">{{ fish.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import photos from '../assets/photos.json';

    export default {
        name: 'FishComponent',
        props: ['id'],
        data() {
            return {
                fish: null,
            };
        },
        created() {
            const fishId = Number(this.id);
            this.fish = photos.find((fish) => fish.id === fishId);
        },
    };
</script>

<style scoped>
    .fish-details {
        padding: 20px;
        background-color: #004e64;
    }

    .card {
        border: none;
        border-radius: 8px;
        display: flex;
        align-items: center;
    }

    .fish-image {
        object-fit: cover;
        width: 40%; 
        height: 350px;
        border-radius: 8px;
        margin-right: 20px;
        border-top-right-radius: 0; 
        border-bottom-right-radius: 0;
    }

    .card-body {
        padding: 15px;
        margin-left: 20px; 
        text-align: left;  
        display: flex;
        flex-direction: column;
        justify-content: center;  
    }
</style>
