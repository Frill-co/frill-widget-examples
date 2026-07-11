# React Frill Example

This example shows how to integrate Frill into a React (Vite) application using the
[`@frillco/script`](https://www.npmjs.com/package/@frillco/script) package.

- [`src/index.tsx`](./src/index.tsx) — loads your container with `useContainer` and controls a
  widget with `useWidget`.

The package loads the Frill script for you on first use, so there's no `<script>` tag to add. If you
only need Frill to load the widgets and surveys configured in your dashboard (without controlling
them from code), calling `useContainer({ key })` is all you need — the hooks are for more advanced
cases where you want to open, navigate or listen to a widget.

> [!NOTE]
> `useWidget` returns `null` until the widget is ready, then re-renders with the instance — so
> `widget?.open()` is safe to call before it loads.

## Project setup

```bash
npm install
```

### Run the example

```bash
npm run dev
```

## Learn more

See the [developer docs](https://developers.frill.co/frill-script) for the full API.
