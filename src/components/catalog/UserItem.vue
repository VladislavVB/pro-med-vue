<template>
  <li>
    <div
      @click.stop="getAlbums(user.id)"
      class="catalog__line catalog__line-level-one"
      :class="{ active: activeButton }"
    >
      <button class="catalog__list-btn"></button>
      <h6 class="catalog__line-name">{{ user.name }}</h6>
    </div>
    <LoaderVue v-if="loading" />
    <ErrorsVue v-else-if="errorServer" />
    <ul
      :class="{ active: activeButton }"
      class="catalog__line-body catalog__line-level-one-body"
    >
      <UserAlbumVue :album="album" v-for="album in userAlbums" :key="album" />
    </ul>
  </li>
</template>

<script>
import axios from "../../api/index";
import LoaderVue from "../../components/Loader.vue";
import ErrorsVue from "../../components/Errors.vue";
import UserAlbumVue from "./UserAlbum.vue";

export default {
  name: "UserItem",
  components: {
    LoaderVue,
    ErrorsVue,
    UserAlbumVue,
  },
  props: {
    user: {
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
    getAlbums(userId) {
      if (!this.activeButton) {
        this.loading = true;
        this.errorServer = false;
        axios
          .get(`/albums?userId=${userId}`)
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
