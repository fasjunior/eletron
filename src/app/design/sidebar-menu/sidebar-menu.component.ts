import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { SidebarMenu } from '../models/sidebar-menu.model';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {
  public menuCollection: SidebarMenu[]=[];
  public selectedText: string;
  private ngUnsubscribe: Subject<boolean> = new Subject();
  constructor() {
  }

  ngOnInit() {
    this.menuCollection.push(new SidebarMenu("Dashboard", "now-ui-icons design_app", ""));
    this.menuCollection.push(new SidebarMenu("Predição de Conta", "now-ui-icons business_money-coins", "predicao"));
    this.menuCollection.push(new SidebarMenu("Configuração", "now-ui-icons loader_gear", "configuracao"));

    this.selectedText = this.menuCollection[0].Text;
  }

  selectMenu(text: string){
    this.selectedText = text;
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  } 

}
