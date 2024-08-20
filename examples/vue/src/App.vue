<template>
  <div>
    <div v-if="view === 'popover'">
      <h1>Popover Widget</h1>
      <button type="button" class="btn" @click="view = 'embed'">
        Switch to Embed
      </button>
      <br />
      <br />
      <FrillWidget />
    </div>
    <div v-else>
      <h1>Embed Widget</h1>
      <button type="button" class="btn" @click="view = 'popover'">
        Switch to Popover
      </button>
      <br />
      <br />
      <FrillEmbeddedWidget />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FrillWidget from './components/FrillWidget.vue';
import FrillEmbeddedWidget from './components/FrillEmbeddedWidget.vue';

export default defineComponent({
  name: 'App',
  components: {
    FrillWidget,
    FrillEmbeddedWidget,
  },
  data: () => ({
    view: 'popover',
  }),
});
</script>

<style>
#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  margin: 60px auto;
  max-width: 800px;
  text-align: center;
}

.btn {
  background-color: #efefef;
  border-radius: 10px;
  border: 0px;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-size: 1.2rem;
  padding: 8px 15px;
  position: relative;
}

.frill-embedded {
  width: 1000px;
  height: 500px;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
}
</style>
