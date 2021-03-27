<template>
  <header>
  </header>
</template>

<script>

export default {
  name: 'TheHeader'
}
</script>

<style lang="scss" scoped>
header{
  width: 100%;
  height: 40px;
  @include bgcolor("first");
  display: flex;
  align-items: center;
  .container {
    padding: 0 20px;
  }
}

</style>