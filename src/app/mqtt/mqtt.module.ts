import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MqttService } from './mqtt.service';

@NgModule({
  imports: [
    CommonModule 
  ],
  declarations: [],
  providers: [MqttService]
})
export class MqttModule { }
 