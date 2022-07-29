<template>
  <div id="app">
    <header style="position:relative;z-index:9999;">
      <!-- <router-link to="/app-vue-hash/">app-vue-hash</router-link> -->
      <router-link to="/app-vue-history/">app-vue-history</router-link>
      <router-link to="/orange-project/">orange-project</router-link>
      <div @click="changeParentState">主项目的数据：{{ commonData.parent }}</div>
    </header>
    <div id="appContainer"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import { start } from 'qiankun';
export default {
  computed: {
    commonData(){
      return this.$store.state.commonData;
    }
  },
   mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
  methods: {
    changeParentState(){
      this.$store.commit('setCommonData',{ parent: 1 });
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
