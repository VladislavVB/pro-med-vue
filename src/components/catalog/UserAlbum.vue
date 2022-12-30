<template>
  <li>
    <div
      @click.stop="getAlbums(album.id)"
      class="catalog__line catalog__line-level-two"
      :class="{ active: activeButton }"
    >
      <button
       
        class="catalog__list-btn"
      ></button>
      <h6 class="catalog__line-name">{{ album.title }}</h6>
    </div>
    <LoaderVue v-if="loading" />
    <ErrorsVue v-else-if="errorServer" />
    <div
      v-else
      :class="{ active: activeButton }"
      class="catalog__line-body favorit__list catalog__line-level-two-body"
    >
      <UserPhotoVue
        v-for="photo in userAlbums"
        :key="photo.id"
        :photo="photo"
      />
    </div>
  </li>
</template>

<script>
import axios from "../../api/index";
import LoaderVue from "../../components/Loader.vue";
import ErrorsVue from "../../components/Errors.vue";
import UserPhotoVue from "./UserPhoto.vue";
export default {
  name: "UserItem",
  components: {
    LoaderVue,
    ErrorsVue,
    UserPhotoVue,
  },
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      errorServer: false,
      activeButton: false,
      userAlbums: [],
    };
  },
  methods: {
    getAlbums(albumId) {
      if (!this.activeButton) {
        this.loading = true;
        this.errorServer = false;
        axios
          .get(`/photos?albumId=${albumId}`)
          .then((res) => {
            this.userAlbums = res.data;
            this.loading = false;
            this.activeButton = true;
          })
          .catch((err) => {
            console.log(err);
            this.loading = false;
            this.errorServer = true;
            this.activeButton = true;
          });
      } else {
        this.activeButton = false;
      }
    },
  },
};
</script>
