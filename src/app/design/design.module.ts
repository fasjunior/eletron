import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopMenuComponent } from './top-menu/top-menu.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TopMenuComponent, SidebarMenuComponent],
  exports: [SidebarMenuComponent, TopMenuComponent]
})
export class DesignModule { }
