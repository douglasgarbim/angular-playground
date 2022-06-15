import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoutingModule } from './config/router/routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RoutingModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
