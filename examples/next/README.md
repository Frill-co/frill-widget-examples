# Next Frill SDK Example

This example shows how to integrate the Frill SDK into a Next application.

Check out the [useFrillWidget](./src/use-frill-widget.ts) hook for the recommended way to interact with a Widget.

> [!NOTE]
> Make sure you have included the Frill Script in your application first, see [index.html](./index.html).
> Place your script in Next.js Script tag with `strategy="beforeInteractive"`
> If you only need to load the Widget and don't need to interact with it then you may not need to do anything else. The script will automatically attach and detach Widgets and Surveys. This example is for more advanced cases where you need to control, or listen to, the Widget.

## Project setup

```bash
npm install
```

### Run the example

```bash
npm run dev
```
