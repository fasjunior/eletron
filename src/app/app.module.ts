import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DesignModule } from './design/design.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from './app.route';
import { MqttService } from './mqtt/mqtt.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    routing,
    BrowserModule,
    DesignModule
  ],
  providers: [MqttService],
  bootstrap: [AppComponent]
})
export class AppModule { }
