<template>
  <v-carousel>
    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      cover
    ></v-carousel-item>
  </v-carousel>

  <!-- The Detail box -->
  <!-- <div
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-9 mb-4 bg-primaryBlack p-2 w-80 h-28 rounded-3xl flex flex-col items-center"
        >
          <div class="name text-white text-2xl">Hello World</div>
          <div class="flex gap-3 items-center justify-center my-3">
            <button class="bg-primaryYellow p-2 rounded-md">
              Watch
              <span>
                <i class="fi fi-rr-play-circle"></i>
              </span>
            </button>

            <button class="bg-primaryYellow p-2 rounded-md">
              Details
              <span>
                <i class="fi fi-rr-file-circle-info"></i>
              </span>
            </button>

            <div class="watchlist">
              <i class="fi fi-rr-rectangle-history-circle-plus text-white"></i>
            </div>

            <div class="share">
              <i class="fi fi-rr-share text-white"></i>
            </div>
          </div>
        </div> -->
</template>

<script>
import sideBar from "../sideBar/sideBar.vue";
export default {
  components: { sideBar },
  // components: {
  //   Carousel3d,
  //   Slide
  // },
  data() {
    return {
      images: this.$store.state.moviesImages,
      trendingMoviesImages: [],
    };
  },
  methods: {
    getPopularMovies() {
      this.$store.dispatch("getPopularMovies");
    },
    dataFetch() {
      this.$store.dispatch("fetchMovies");
    },
    fetchLatest() {
      this.$store.dispatch("getLatestMovies");
    },
    // fetchMovieImages() {
    //   this.$store.dispatch("getMovieImages");
    // },
  },
};
</script>
