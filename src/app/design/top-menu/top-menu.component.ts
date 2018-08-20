import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { MqttService } from '../../mqtt/mqtt.service';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  public brokerConnected: boolean;
  public isReconnecting: boolean;
  private ngUnsubscribe: Subject<boolean> = new Subject();

  constructor(private mqttService: MqttService) { }

  ngOnInit() {
    this.mqttService.isConnected$.takeUntil(this.ngUnsubscribe).subscribe(r=>{
      this.brokerConnected = r;
    });
    this.mqttService.isReconnecting$.takeUntil(this.ngUnsubscribe)
    .subscribe(r=>{
      this.isReconnecting = r;
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }

  desconectarBroker(){
    if(this.brokerConnected){
      this.mqttService.disconnectBroker();  
    }
    
  }

  conectarBroker(){
    if(!this.brokerConnected){
      this.mqttService.connectBroker();  
    }
    
  }

  sair() {
  }
}
