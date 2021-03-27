<template>
  <div class="modal">
    <button class="btn-icon" @click="$store.commit('UPDATE_OPEN_MODAL', false)">
      <i class="fas fa-times-circle"></i>
    </button>
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(#000000, 0.7);
}

.btn-icon {
  position: fixed;
  top: 5vh;
  right: 5vh;
  background: none;
  border: none;
  i{
    @include bgcolor("second");
    @include textcolor("light");
    @include fontsize("size5");
    border-radius: 50%;
  }
}
</style>