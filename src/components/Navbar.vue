<template>
  <nav class="navbar">
    <RouterLink
      v-for="link in links"
      :key="link.id"
      class="catalog__link"
      :to="{ name: link.routeName }"
    >
      {{ link.title }}
    </RouterLink>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped lang="scss">
.router-link-exact-active {
  color: #117dc1;
  background: #edf9ff;
}
</style>
