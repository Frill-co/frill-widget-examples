import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FrillLogoComponent } from './logo/logo.component';
import { FrillWidgetComponent } from './widget/widget.component';

@NgModule({
  declarations: [AppComponent, FrillLogoComponent, FrillWidgetComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
