import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule
  ],
  providers: [],
  bootstrap: [CoreComponent]
})
export class CoreModule { }
