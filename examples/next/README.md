# Next.js Frill Example

This example shows how to integrate Frill into a Next.js application using the
[`@frillco/script`](https://www.npmjs.com/package/@frillco/script) package.

- [`src/app/layout.tsx`](./src/app/layout.tsx) — renders `<FrillScript>` once to load your
  container before hydration. Pass `next/script` via `as` to control the load strategy.
- [`src/app/page.tsx`](./src/app/page.tsx) — controls a widget with the `useWidget` hook.
- [`src/app/embed/page.tsx`](./src/app/embed/page.tsx) — embeds a widget inline with
  `<FrillWidgetEmbed>`.

If you only need Frill to load the widgets and surveys configured in your dashboard (without
controlling them from code), rendering `<FrillScript container={{ key }} />` is all you need — the
hooks are for more advanced cases where you want to open, navigate or listen to a widget.

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
