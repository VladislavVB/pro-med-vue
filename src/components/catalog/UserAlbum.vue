<template>
  <li>
    <div
      @click.stop="getAlbums(album.id)"
      class="catalog__line catalog__line-level-two"
    >
      <button
        :class="{ active: !!userAlbums.length }"
        class="catalog__list-btn"
      ></button>
      <h6 class="catalog__line-name">{{ album.title }}</h6>
    </div>
    <LoaderVue v-if="loading" />
    <ErrorsVue v-else-if="errorServer" />
  </li>
</template>

<script>
import axios from "../../api/index";
import LoaderVue from "../../components/Loader.vue";
import ErrorsVue from "../../components/Errors.vue";

export default {
  name: "UserItem",
  components: {
    LoaderVue,
    ErrorsVue,
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
      userAlbums: [],
    };
  },
  methods: {
    getAlbums(userId) {
      this.userAlbums = [];
      console.log(userId);
      axios.get(`/albums?userId=${userId}`).then((res) => {
        this.userAlbums = res.data;
        console.log(res.data);
      });
    },
  },
};
</script>
