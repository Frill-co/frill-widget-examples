# Frill Widget Examples

Welcome to the Frill Widget examples repository.

This repository contains advanced usage examples for Widgets, including user identification, SSO, iframes, and external control.

View [our examples](./examples) to see what's possible.

## Getting Started

Widgets should always be loaded with the Widget Script. Get your Widget Script code from the [Your Widgets](https://app.frill.co/settings/company/widget) settings page and place the script before the closing `</body>` tag on your website.

> [!NOTE]
> If you are using a Javascript framework, e.g. React (including NextJS), Vue, Angular, etc. You don't need to do anything special. Load the script tag like you would any other.

```html
<!-- Frill (https://frill.co) -->
<script>
  (function(t,r){function s(){var a=r.getElementsByTagName("script")[0],e=r.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://widget.frill.co/v2/container.js",a.parentNode.insertBefore(e,a)}if(!t.Frill){var f=0,i={};t.Frill=function(e,o){var n,l=f++,c=new Promise(function(v,d){i[l]={params:[e,o],resolve(p){n=p,v(p)},reject:d}});return c.destroy=function(){delete i[l],n&&n.destroy()},c},t.Frill.q=i}r.readyState==="complete"||r.readyState==="interactive"?s():r.addEventListener("DOMContentLoaded",s)})(window,document);
  window.Frill('container', { key: 'YOUR_SCRIPT_KEY' });
</script>
<!-- End Frill -->
```

## Widget API JS

The Widget API allows you to access, customize, and control any Widget loaded in your script. Using the Widget API is simple once you have a reference to a Widget. To do this, you first need to know the Widget Key, which you can find in the Widgets dashboard or on the edit screen.

Once you have the Widget key, there are two ways to get access to the Widget instance.

#### Using the Widget Script

The easiest way to access a Widget is by providing an `onReady` callback in your script configuration. This callback will run once the Widget is ready and will receive the `widget` instance.

To set this up, include a custom widgets configuration when you load your script, using your Widget Key. The widgets parameter accepts an array if you have multiple Widgets.

Example:
```js
window.Frill('container', {
  key: 'YOUR_SCRIPT_KEY', // <-- Add Script Key here
  widgets: [
    {
      key: 'YOUR_WIDGET_KEY', // <-- Add Widget Key here
      callbacks: {
        onReady(widget) {
          // This function is called when the Frill Widget is fully loaded and ready for use
          console.log(widget);
        },
      },
    },
  ],
});
```

#### Using the `Frill` API

It's possible to directly load (or retrieve) a single Frill Widget. If the Widget is already loaded, the function will simply return the existing Widget, making it safe to call multiple times.

```js
const widget = await window.Frill('widget', {
  key: 'YOUR_WIDGET_KEY', // <-- Add Widget Key here
});

// You can now control the widget, e.g. widget.open();
```

> [!NOTE]
> This is the recommended approach if you are using a JS framework. Please see our examples for [React](./react), [Vue](./vue) & [Angular](./angular). 


