<template>
  <img :style="`height: ${height}`" class="loader" src="../assets/images/loader.gif" alt="loader" />
</template>

<script>
export default {
  name: "Loader",
  props: {
    height: {
      type: String,
      default: '100px'
    }
  }
};
</script>
