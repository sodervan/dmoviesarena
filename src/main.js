import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import SignIn from "./components/Forms/signIn.vue";
import Home from "./components/Home/HomePage.vue";
import sideBar from "./components/sideBar/sideBar.vue";
import "vuetify/dist/vuetify.min.css";
import Vuetify from "vuetify";
import "./style.css";

const app = createApp(App);

const store = createStore({
  state() {
    return {
      movies: [],
      trendingMovies: [],
      moviesImages: [],
    };
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setTrendingMovies(state, trendingMovies) {
      state.trendingMovies = trendingMovies;
    },
    getImages(state, images) {
      state.moviesImages.push(images);
    },
  },
  actions: {
    //GET MOVIES IMAGES BY ID

    async getPopularMovies(context) {
      const url =
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzBmZmQwOWRiMGRkNTJmNGFhNzdhMDBkNWY5OWI3NCIsIm5iZiI6MTcxOTMxMDA3Ni40MTcwODIsInN1YiI6IjY1MzRmYjMwYzE0ZmVlMDBlMzVlZjFiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HLX9suluFJ0ZAwxQmRd7DXXx3AbWSKlFfxIynBBnDSs",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    },
  },
});

app.component("sign-in", SignIn);
app.component("home-page", Home);
app.component("side-bar", sideBar);
app.use(store);
app.mount("#app");
app.use(Vuetify);
