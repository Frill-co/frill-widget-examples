"use client";

import { useFrillWidget } from "./use-frill-widget";

export default function Home() {
  const widgetRef = useFrillWidget(
    "widget", // Use "survey" if you want to use the survey widget
    "639e39ad-86e4-459b-b8fd-867369329c59" // Put your Widget key here
  );

  return (
    <div className="app">
      <p>Next & Frill are up and running!</p>
      <button
        type="button"
        onClick={() => {
          widgetRef.current?.open();
        }}>
        Open the Frill widget
      </button>
      <button
        type="button"
        onClick={() => {
          widgetRef.current?.viewSection("ideas");
          widgetRef.current?.open();
        }}>
        View Ideas
      </button>
      <button
        type="button"
        onClick={() => {
          widgetRef.current?.viewSection("announcements");
          widgetRef.current?.open();
        }}>
        View Announcements
      </button>
      <button
        type="button"
        onClick={() => {
          widgetRef.current?.viewSection("roadmap");
          widgetRef.current?.open();
        }}>
        View Roadmap
      </button>
    </div>
  );
}
