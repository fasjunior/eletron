import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopMenuComponent } from './top-menu/top-menu.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { MqttService } from '../mqtt/mqtt.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TopMenuComponent, SidebarMenuComponent],
  exports: [SidebarMenuComponent, TopMenuComponent],
  providers: [MqttService]
})
export class DesignModule { }
