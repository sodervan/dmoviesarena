<template>
  <div class="flex items-center justify-center min-h-screen">
    <aside
      class="sidebar w-13 bg-homeBlack h-100 mt-auto mb-auto rounded-md mr-6"
    >
      <div class="menu flex flex-col justify-between items-center h-full">
        <router-link class="button" to="/Home">
          <i class="fi fi-rr-home text-primaryWhite text-xxs"></i>
        </router-link>

        <router-link class="button" to="/search">
          <i class="fi fi-rr-search text-primaryWhite text-xxs"></i>
        </router-link>

        <router-link class="button" to="/movies">
          <i class="fi fi-rr-clapperboard-play text-primaryWhite text-xxs"></i>
        </router-link>

        <router-link class="button" to="/tvshows">
          <i class="fi fi-rr-screen text-primaryWhite text-xxs"></i>
        </router-link>

        <router-link class="button" to="/kdrama">
          <i class="fi fi-rr-theater-masks text-primaryWhite text-xxs"></i>
        </router-link>

        <router-link class="button" to="/anime">
          <i class="fi fi-rr-animated-icon text-primaryWhite text-xxs"></i>
        </router-link>

        <router-link class="button" to="/collection">
          <i class="fi fi-rr-followcollection text-primaryWhite text-xxs"></i>
        </router-link>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  cursor: pointer;
}

.button i {
  font-size: 24px;
}
</style>
