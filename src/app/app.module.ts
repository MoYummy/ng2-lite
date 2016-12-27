import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppworksComponent } from './appworks.component';
import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [
    AppworksComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    AppworksComponent,
    HelloComponent
  ]
})
export class AppModule { }
