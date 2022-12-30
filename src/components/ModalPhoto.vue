<template>
  <div v-if="visibleModal" @click.stop="closeModal" class="active catalog__modal-bg">
    <div @click.stop="closeModal" class="catalog__modal-bg-close">
      <img src="../assets/images/close.png" alt="close" />
    </div>
    <div @click.stop="" class="catalog__modal-img">
      <img :src="modalImage" alt="" />
    </div>
  </div>
</template>

<script>
import { bus } from '../main'
export default {
  name: "ModalPhoto",
 
  data() {
    return {
      visibleModal: false,
      modalImage: '',
    };
  },
  methods: {
    closeModal() {
      this.visibleModal = false
    },
  },
  created() {
    bus.$on('modalPhoto', image => {
      this.visibleModal = true
      this.modalImage = image
      console.log(image);
    })
  }
};
</script>
