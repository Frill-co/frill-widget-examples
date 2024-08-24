<template>
  <button type="button" class="frill-container btn">
    Click here to show the Widget
  </button>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase,@typescript-eslint/no-explicit-any */
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FrillWidget',
  data: () => ({
    widget: undefined as FrillWidget | undefined,
    config: undefined as FrillConfig | undefined,
  }),
  mounted() {
    this.setupFrillWidget();
  },
  beforeUnmount() {
    if (this.widget) {
      this.widget.destroy();
      this.widget = undefined;
    }

    if (this.config) {
      window.Frill_Config = window.Frill_Config.filter((c) => c !== this.config);
    }
  },
  methods: {
    setupFrillWidget() {
      this.config = {
        key: 'YOUR_WIDGET_KEY', // <-- Add Widget key here
        callbacks: {
          onReady: (frillWidget) => {
            this.widget = frillWidget;
          },
        },
      };

      window.Frill_Config = window.Frill_Config || [];
      window.Frill_Config.push(this.config);

      if ('Frill' in window) {
        this.widget = window.Frill.widget(this.config);
      }
    },
  },
});
</script>
