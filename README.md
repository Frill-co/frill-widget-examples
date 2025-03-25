# Frill Widget & Survey Examples

Welcome to the Frill Widget & Survey examples repository.

This repository contains advanced usage examples for Widgets & Surveys, including user identification, SSO, iframes, and external control.

View [our examples](./examples) to see what's possible.

## Getting Started

We recommend using the Frill Script to automatically load all Widget and Surveys. Get your Frill Script code from the [Widgets](https://app.frill.co/dashboard/widget) or [Surveys](https://app.frill.co/dashboard/survey) page and place the script before the closing `</body>` tag on your website.


```html
<!-- Frill (https://frill.co) -->
<script>
  (function(t,r){function s(){var a=r.getElementsByTagName("script")[0],e=r.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://widget.frill.co/v2/container.js",a.parentNode.insertBefore(e,a)}if(!t.Frill){var f=0,i={};t.Frill=function(e,o){var n,l=f++,c=new Promise(function(v,d){i[l]={params:[e,o],resolve(p){n=p,v(p)},reject:d}});return c.destroy=function(){delete i[l],n&&n.destroy()},c},t.Frill.q=i}r.readyState==="complete"||r.readyState==="interactive"?s():r.addEventListener("DOMContentLoaded",s)})(window,document);
  window.Frill('container', {
    key: 'YOUR_SCRIPT_KEY',
    // Extra configuration here... e.g. user identification/sso/callback
  });
</script>
<!-- End Frill -->
```

Want to load a single Widget or Survey? Check out [this example](./examples/load-widget.html).

> [!NOTE]
> If you are using a JavaScript framework, e.g. React (including NextJS), Vue, Angular, etc. you don't need to do anything specail. Load the script tag like you would any other. Frill will automatically create and remove Widgets & Surveys. If you need more fine-tuned control, check out [our examples](./examples/react) for best practices.

## Frill API JS

The Frill API allows you to access, customize, and control any Widget or Survey loaded in your script. Using the Frill API is simple once you have a reference to a Widget, or Survey. To do this, you first need to know the **Key**, which you can find in your Frill dashboard or on the edit screen.

Once you have the **Key**, there are two ways to get access to the instance.

#### Using `onReady` callback

The easiest way to access a Widget or Survey is by providing an `onReady` callback in your script configuration. This callback will run once when ready and will receive the `widget` (or `survey`) instance.

To set this up, include a custom `widgets` or `surveys` configuration when you load your script, using the corresponding key.

**Example:**

```js
window.Frill('container', {
  key: 'a809b4ac-5976-4444-8684-15f7a3a20b4c',
  surveys: [
    {
      key: 'YOUR_SURVEY_KEY', // <-- Add Survey key here
      callbacks: {
        onReady(survey) {
          // This function is called when the Frill Survey is fully loaded and ready for use
          console.log(survey);
        },
      },
    },
  ],
  widgets: [
    {
      key: 'YOUR_WIDGET_KEY', // <-- Add Widget key here
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

It's possible to directly access (or load) a single Frill Widget or Survey. If it's already loaded, the function will simply return the existing instance, making it safe to call multiple times. Using the API to load will ignore all targeting rules (e.g. URL matching).

```js
const widget = await window.Frill('widget', {
  key: 'YOUR_WIDGET_KEY', // <-- Add Widget key here
});

const survey = await window.Frill('survey', {
  key: 'YOUR_SURVEY_KEY', // <-- Add Survey key here
});

// You can now control the widget, e.g. widget.open();
```

### Identifying users

Guest users can be identified during container load, or at any time using the `Frill` API. Calling the `identify` command will identify the user for all active Widgets & Surveys. It's okay to call before they have been created, all new instances will inherit the current user.

The only requirement for user identification is that the user email must be valid. Note: Identifying a user will not work if you have SSO enabled.

The simplest way to identify users is during container initialization, just define the user as part of your config.

```js
window.Frill('container', {
  key: 'YOUR_SCRIPT_KEY',
  user: { email: 'email@domain.com', name: 'my user' },
});
```

If your app has client side authentication, you can identify the user using the `Frill` API when they login:

```js
window.Frill('identify', { email: 'email@domain.com', name: 'my user' });
```

If the user logs outs you should unidentify them:

```js
window.Frill('unidentify');
```

Using iframes? Check out [our simple example](./examples/iframe-identify-user.html) or [SSO example](./examples/iframe-identify-sso.html) to see how to do it.

#### SSO

Guest user identification will not work if you have SSO enabled. To identify an SSO user you need to pass a valid SSO JWT as part of your config.

```js
window.Frill('container', {
  key: 'YOUR_SCRIPT_KEY',
  ssoToken: 'SSO_FRILL_TOKEN_FROM_SERVER',
});
```

### Languages

Widgets and Surveys will use the current browser language by default, but you can override the language by specifying one in your config.

```js
window.Frill('container', {
  key: 'YOUR_SCRIPT_KEY',
  language: 'es',
});
```

### Debugging

Not sure why a Widget or Survey isn't showing? Use `Frill('help')` to get a summary of all Frill instances.