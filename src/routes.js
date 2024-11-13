import Vue from 'vue';
import VueRouter from 'vue-router';
import GalleryComponent from './components/GalleryComponent.vue';
import FishComponent from './components/FishComponent.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: GalleryComponent, name: 'home' },
  { path: '/fish/:id', component: FishComponent, name: 'fish', props: true },
];

const router = new VueRouter({
  mode: 'history',  // without '#' in the URL
  routes
});

export default router;

