import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  public brokerConnected: boolean;
  public isReconnecting: boolean;
  private ngUnsubscribe: Subject<boolean> = new Subject();

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }

  desconectarBroker() {

  }

  conectarBroker() {

  }

  sair() {
  }
}
