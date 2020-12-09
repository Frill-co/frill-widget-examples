<template>
  <Logo />
  <h1>Welcome to the Frill Widget Example App</h1>
  <p>
    This component contains example code showing of how to dynamically load the
    Frill JS file and create a widget when it's loaded.
  </p>
  <p>
    <button class="btn" @click="showFrillWidget = !showFrillWidget">
      {{ showFrillWidget ? "Hide widget component" : "Show widget component" }}
    </button>
  </p>
  <FrillWidget v-if="showFrillWidget" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FrillWidget from "./components/FrillWidget.vue";
import Logo from "@/components/Logo.vue";

export default defineComponent({
  name: "App",
  components: {
    Logo,
    FrillWidget
  },
  data: () => ({
    showFrillWidget: true
  })
});
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

.btn {
  display: inline-block;
  background-color: #efefef;
  border-radius: 10px;
  padding: 8px 15px;
  border: 0px;
  font-size: 1.2rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
}
</style>
