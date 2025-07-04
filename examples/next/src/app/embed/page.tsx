"use client";

import React from "react";

function Embed() {
  React.useEffect(() => {
    window.Frill("widget", { key: "widget_stage_MsKZBt_01yXv5" }); // Replace with your widget key
  }, []);

  return (
    <div>
      <div
        data-frill-widget="widget_stage_MsKZBt_01yXv5" // Replace with your widget key
        style={{ width: "340px", height: "460px" }}></div>
    </div>
  );
}

export default Embed;
