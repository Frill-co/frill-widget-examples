<template>
  <Logo />
  <h1>Welcome to the Frill Widget Example App</h1>
  <p>
    This component contains example code showing of how to dynamically load the Frill JS file and
    create a widget when it's loaded.
  </p>
  <p>
    <strong>🔥 Hot Tip:</strong> Make sure your trigger element has <code>position: relative</code>
  </p>
  <p>
    <button class="btn" @click="showFrillWidget = !showFrillWidget">
      {{ showFrillWidget ? 'Hide widget component' : 'Show widget component' }}
    </button>
  </p>
  <FrillWidget v-if="showFrillWidget" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FrillWidget from './components/FrillWidget.vue';
import Logo from '@/components/Logo.vue';

export default defineComponent({
  name: 'App',
  components: {
    Logo,
    FrillWidget,
  },
  data: () => ({
    showFrillWidget: true,
  }),
});
</script>

<style>
#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 60px auto;
  max-width: 800px;
  text-align: center;
}

.btn {
  background-color: #efefef;
  border-radius: 10px;
  border: 0px;
  color: black;
  display: inline-block;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.2rem;
  padding: 8px 15px;
  position: relative;
}

code {
  background-color: #f6f6f6;
  display: inline-block;
  line-height: 1.5;
  padding: 2px 4px;
}
</style>
