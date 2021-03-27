<template>
  <header>
    <div class="container">
      <h1 class="logo">
        <Logo />
      </h1>
    </div>
  </header>
</template>

<script>
import Logo from './Logo';
export default {
  name: 'TheHeader',
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
header{
  width: 100%;
  height: 40px;
  @include bgcolor("first");
  display: flex;
  align-items: center;
}

.logo {
  width: 2rem;
  height: 2rem;
}
</style>