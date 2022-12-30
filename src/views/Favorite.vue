<template>
  <div class="favorit__page">
    <EmptyVue v-if="favoritePhotos.length === 0" />
    <ul v-else class="favorit__list">
      <UserPhotoVue
        v-for="photo in favoritePhotos"
        :key="photo.id"
        :cardBig="true"
        :photo="photo"
      />
    </ul>
  </div>
</template>

<script>
import UserPhotoVue from "../components/catalog/UserPhoto.vue";
import EmptyVue from "../components/Empty.vue";
export default {
  name: "Home",
  components: {
    UserPhotoVue,
    EmptyVue,
  },
  data() {
    return {
      favoritePhotos: [],
    };
  },
  methods: {
    getFavorite() {
      this.favoritePhotos = JSON.parse(localStorage.getItem("favoriteAlbum"));
    },
  },
  mounted() {
    this.getFavorite();
  },
};
</script>
