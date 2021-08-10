<template>
  <div class="frill-component">
    <p>
      <button type="button" class="frill-container btn">
        Click here to show the widget
      </button>
    </p>
  </div>
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
        key: 'e0ceb593-2c29-48a6-9d66-78bca8008a4f', // <-- Add Widget key here
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
