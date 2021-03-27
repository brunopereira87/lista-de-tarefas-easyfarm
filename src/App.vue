<template>
  <div id="app">
    <TheHeader />
    <main>
      <div class="container">
        <Tasks />
      </div>
    </main>
  </div>
</template>
<script>
import Tasks from './views/Tasks';
import TheHeader from './components/TheHeader';
export default {
  components:{
    Tasks,
    TheHeader
  },

  mounted(){
    window.onresize = () => {
      this.$store.commit('UPDATE_WINDOW_WIDTH',window.innerWidth)
    }
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $main_font;
}
html{
  @include fontsize("main");
}
body{
  @include textcolor("dark");
  @include fontsize("size2");

}

.page-title{
  margin-top: $section_margin;
  margin-bottom: $medium_space2;
  text-align: center;
  @include fontsize('size5');
}

.container{
  padding: $medium_space2;
  width: 100%;
}

@media(min-width:768px){
  .container{
    max-width: 900px;
    margin: 0 auto;
  }
}
</style>
