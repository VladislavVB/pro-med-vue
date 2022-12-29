<template>
  <div id="app">
    <div class="custom__container">
      <NavbarVue :links="navbarLinks"/>
      <router-view />
    </div>
  </div>
</template>

<script>
import NavbarVue from './components/Navbar.vue';
export default {
  name: "App",
  components: {
    NavbarVue
  },
  data() {
    return {
      navbarLinks: [
        { id: 1, title: "Каталог", routeName: "catalog" },
        { id: 2, title: "Избранное", routeName: "favorite" },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
