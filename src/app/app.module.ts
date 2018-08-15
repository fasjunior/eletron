import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DesignModule } from './design/design.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
