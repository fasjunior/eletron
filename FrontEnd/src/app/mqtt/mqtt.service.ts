import { Injectable } from '@angular/core';
import { AppConfig } from '../shared/app.config';
import { Paho } from 'ng2-mqtt/mqttws31';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MqttService {
  timerReconnect: any;
  private client: Paho.MQTT.Client = new Paho.MQTT.Client(AppConfig.serverMQTT, AppConfig.portMQTT, '/mqtt', AppConfig.clientID);

  private isConnected     = new Subject<boolean>();
  private isReconnecting  = new Subject<boolean>();
  private result          = new Subject<Paho.MQTT.Message>();

  result$         = this.result.asObservable();
  isConnected$    = this.isConnected.asObservable();
  isReconnecting$ = this.isReconnecting.asObservable();


  constructor() {
    this.client.onConnectionLost = this.connectionLost.bind(this);
    this.client.onMessageArrived = this.messageArrived.bind(this);
  }

  connectBroker() {
    this.client.connect({ onSuccess: this.onConnected.bind(this), onFailure: this.onFailureConnect.bind(this) });
  }

  private onFailureConnect(message) {
    this.isConnected.next(false);
  }

  private onConnected(): void {
    console.log('Connected to broker.');
    clearInterval(this.timerReconnect);
    this.onSubscribeTopics(AppConfig.topicsMQTT);
    this.isConnected.next(true);
    this.isReconnecting.next(false);
  }

  private onSubscribeTopics(topics: string[]): void {
    topics.forEach(topic => {
      if (topic && topic.length > 0) {
        this.client.subscribe(topic, { qos: 0 });
      }
    });
  }

  private connectionLost(responseObject) {
    this.isConnected.next(false);
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:" + responseObject.errorMessage);
      this.isReconnecting.next(true);
      this.timerReconnect = setInterval(() => {
        this.connectBroker();
      }, 5000);
    }
  }

  private messageArrived(message: Paho.MQTT.Message) {
    this.result.next(message);
  }

  disconnectBroker() {
    this.client.disconnect();
    console.log("Broker Disconnect");
    this.isConnected.next(false);
    this.isReconnecting.next(false);
  }
}
