"use client";

import { useWidget } from "@frillco/script/react";

// Put your Widget key here (use `useSurvey` for surveys).
const WIDGET_KEY = "639e39ad-86e4-459b-b8fd-867369329c59";

export default function Home() {
  // `null` until the widget is ready, then re-renders with the instance — so
  // effects can reliably subscribe via `widget.events`.
  const widget = useWidget({ key: WIDGET_KEY });

  return (
    <div className="app">
      <p>Next & Frill are up and running!</p>
      <button type="button" onClick={() => widget?.open()}>
        Open the Frill widget
      </button>
      <button
        type="button"
        onClick={() => {
          widget?.viewSection("ideas");
          widget?.open();
        }}>
        View Ideas
      </button>
      <button
        type="button"
        onClick={() => {
          widget?.viewSection("announcements");
          widget?.open();
        }}>
        View Announcements
      </button>
      <button
        type="button"
        onClick={() => {
          widget?.viewSection("roadmap");
          widget?.open();
        }}>
        View Roadmap
      </button>
    </div>
  );
}
