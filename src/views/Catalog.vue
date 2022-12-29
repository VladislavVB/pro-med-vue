<template>
  <div class="catalog__page">
    <ul class="catalog__list">
      <LoaderVue v-if="loading" />
      <ErrorsVue v-else-if="errorServer" />
      <template v-else>
        <UserItemVue
          v-for="user in userList"
          :key="user.id"
          :user="user"
        />
      </template>
    </ul>
  </div>
</template>

<script>
import axios from "../api/index";
import LoaderVue from "../components/Loader.vue";
import ErrorsVue from "../components/Errors.vue";
import UserItemVue from "../components/catalog/UserItem.vue";
export default {
  name: "Home",
  data() {
    return {
      loading: false,
      errorServer: false,
      userList: [],
    };
  },
  components: {
    LoaderVue,
    ErrorsVue,
    UserItemVue,
  },
  methods: {
    getCatalogUsers() {
      this.loading = true;
      this.errorServer = false;
      axios
        .get("/users/")
        .then((res) => {
          this.userList = res.data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
          this.errorServer = true;
        });
    },
  },
  mounted() {
    this.getCatalogUsers();
  },
};
</script>
