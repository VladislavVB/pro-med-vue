<template>
  <LoaderVue v-if="loading" />
  <ErrorsVue v-else-if="errorServer" />
  <li v-else @click="photoModal" class="photo__item-wrapper">
    <div class="photo__item">
      <div
        @click.stop="favoriteImage()"
        class="photo__item-star"
        :class="{ active: favorite }"
      >
        <img src="../../assets/images/star_active.png" alt="" />
        <img src="../../assets/images/star_empty.png" alt="" />
      </div>
      <img
        class="photo__item-img"
        :title="photo.title"
        :src="photo.thumbnailUrl"
        :alt="photo.title"
      />
    </div>
    <div class="photo__item-descp">
      <h3 class="photo__item-title">{{ photo.title }}</h3>
    </div>
  </li>
</template>

<script>
import { bus } from "../../main";
import LoaderVue from "../../components/Loader.vue";
import ErrorsVue from "../../components/Errors.vue";
export default {
  name: "UserItem",
  props: {
    photo: {
      type: Object,
      required: true,
    },
    cardBig: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    LoaderVue,
    ErrorsVue,
  },
  data() {
    return {
      loading: false,
      favorite: false,
      errorServer: false,
    };
  },
  methods: {
    photoModal() {
      bus.$emit("modalPhoto", this.photo.url);
    },

    favoriteImage() {
      let favoriteLocal = JSON.parse(localStorage.getItem("favoriteAlbum"));
      console.log(favoriteLocal);
      if (favoriteLocal === null || favoriteLocal.length === 0) {
        localStorage.setItem("favoriteAlbum", JSON.stringify([this.photo]));
      } else {
        const arrayNumbersFavorite = favoriteLocal.map((elem) => elem.id);
        if (arrayNumbersFavorite.includes(this.photo.id)) {
          favoriteLocal = favoriteLocal.filter(
            (elem) => elem.id !== this.photo.id
          );
        } else {
          favoriteLocal.push(this.photo);
        }
        localStorage.setItem("favoriteAlbum", JSON.stringify(favoriteLocal));
      }
      this.activeStar();
    },
    activeStar() {
      this.favorite = JSON.parse(localStorage.getItem("favoriteAlbum"))
        .map((elem) => elem.id)
        .includes(this.photo.id);
    },
  },
  mounted() {
    this.activeStar();
  },
};
</script>
