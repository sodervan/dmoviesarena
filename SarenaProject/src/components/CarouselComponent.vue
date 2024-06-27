<template>
    <v-container>
      <v-carousel>
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-img :src="item.src"></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'CarouselComponent',
    data() {
      return {
        items: [
          { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
          { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
          { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
          { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' },
        ],
      };
    },
  };
  </script>
  