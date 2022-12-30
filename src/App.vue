<template>
  <div id="app">
    <div class="custom__container">
      <NavbarVue :links="navbarLinks"/>
      <router-view />
      <ModalPhotoVue/>
    </div>
  </div>
</template>

<script>
import NavbarVue from './components/Navbar.vue';
import ModalPhotoVue from './components/ModalPhoto.vue';
export default {
  name: "App",
  components: {
    NavbarVue,
    ModalPhotoVue
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
