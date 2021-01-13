<template>
  <div class="frill-component">
    <p>
      <span class="frill-container btn">Click here to show the widget</span>
    </p>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase,@typescript-eslint/no-explicit-any */
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FrillWidget',
  data: () => ({
    frillWidget: undefined as FrillWidget | undefined,
  }),
  mounted() {
    this.setupFrillWidget();
  },
  beforeUnmount() {
    if (this.frillWidget) {
      this.frillWidget.destroy();
      this.frillWidget = undefined;
    }
  },
  methods: {
    setupFrillWidget() {
      window.Frill_Config = {
        selector: '.frill-container',
        token: '393da219-be59-47e9-8973-1828b9f0dd0d', // <-- Add Widget ID here
        position: 'fixed',
        offset: [0, 10],
        callbacks: {
          onReady: (frillWidget) => {
            this.frillWidget = frillWidget;
          },
        },
      };

      if ('Frill' in window) {
        this.frillWidget = window.Frill.widget((window as any).Frill_Config);
      }
    },
  },
});
</script>
