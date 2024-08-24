import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'frill-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
})
export class FrillWidgetComponent implements OnInit {
  widget?: FrillWidget;
  config?: FrillConfig;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.config = {
      key: 'YOUR_WIDGET_KEY', // <-- Add Widget key here
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
  }

  ngOnDestroy() {
    this.widget?.destroy();
    window.Frill_Config = window.Frill_Config.filter((c) => c !== this.config);
  }
}
