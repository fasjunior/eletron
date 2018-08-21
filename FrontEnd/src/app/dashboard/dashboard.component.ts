import { Component, OnInit } from '@angular/core';
import { MqttService } from '../mqtt/mqtt.service';
import { Chart } from 'chart.js';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public myChart: Chart;
  public myChartDay: Chart;
  public myChartHour: Chart;
  public myChartMonth: Chart;
  public dataInstantEnergy: number[] = [];
  public dataEnergyPerHour: number[] = [];
  public dataEnergyPerDay: number[] = [];
  public dataEnergyPerMonth: number[] = [];
  public labelsInstantEnergy: string[] = [];
  public labelsEnergyPerHour: string[] = [];
  public labelsEnergyPerDay: string[] = [];
  public labelsEnergyPerMonth: string[] = [];
  public mediaHora: number;
  public dtLastUpdateHour: string;
  public dtLastUpdateDay: string;
  public dtLastUpdateMonth: string;
  private timerObterMedias: any;
  private ngUnsubscribe: Subject<boolean> = new Subject();

  constructor(private mqttService: MqttService) { }

  ngOnInit(): void {
    this.mqttService.result$.takeUntil(this.ngUnsubscribe).subscribe(r => {
      // console.log('topic: ' + r.destinationName);
      // console.log('message: ' + r.payloadString);
    });
  }

  ngOnDestroy() {
    clearInterval(this.timerObterMedias);
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }

  desconectar() {
    this.mqttService.disconnectBroker();
  }

  hexToRGB(hex, alpha) {
    let r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }

  //Gráfico Consumo Instantâneo
  initChartInstantaneous() {
    let chartColor = "#FFFFFF";
    let ctx = (<HTMLCanvasElement>document.getElementById('energyInstantaneousChart')).getContext("2d");

    let gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");

    this.myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.labelsInstantEnergy,
        datasets: [{
          label: "Energia (KWh)",
          borderColor: chartColor,
          pointBorderColor: chartColor,
          pointBackgroundColor: "#1e3d60",
          pointHoverBackgroundColor: "#1e3d60",
          pointHoverBorderColor: chartColor,
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: this.dataInstantEnergy
        }]
      },
      options: {
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 0,
            bottom: 0
          }
        },
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: '#fff',
          titleFontColor: '#333',
          bodyFontColor: '#666',
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        legend: {
          position: "top",
          fillStyle: "#FFF",
          display: true,
          text: 'Energia (KWh)',
          labels: {
            fontColor: '#FFF'
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: "rgba(255,255,255,0.4)",
              fontStyle: "bold",
              beginAtZero: true,
              maxTicksLimit: 5,
              padding: 10
            },
            gridLines: {
              drawTicks: true,
              drawBorder: false,
              display: true,
              color: "rgba(255,255,255,0.1)",
              zeroLineColor: "transparent"
            }

          }],
          xAxes: [{
            gridLines: {
              zeroLineColor: "transparent",
              display: false,

            },
            ticks: {
              padding: 10,
              fontColor: "rgba(255,255,255,0.4)",
              fontStyle: "bold"
            }
          }]
        }
      }
    });
  }

  //Gráfico Consumo Por Hora
  initChartHour() {
    let ctx = (<HTMLCanvasElement>document.getElementById("energyHourChart")).getContext("2d");

    let gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, this.hexToRGB('#2CA8FF', 0.6));

    let optionsChartHour = {
      type: "bar",
      data: {
        labels: this.labelsEnergyPerHour,
        datasets: [{
          label: "Energia (KWh)",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,
          data: this.dataEnergyPerHour
        }]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          bodySpacing: 4,
          mode: "nearest",
          intersect: 0,
          position: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },
        responsive: 1,
        scales: {
          yAxes: [{
            gridLines: {
              zeroLineColor: "transparent",
              drawBorder: false
            }
          }],
          xAxes: [{
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: false
            }
          }]
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 15,
            bottom: 15
          }
        }
      }
    };

    this.myChartHour = new Chart(ctx, optionsChartHour);
  }

  //Gráfico Consumo Diário
  initChartDay() {
    let gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: true
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          gridLines: {
            zeroLineColor: "transparent",
            display: false,

          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };
    let ctx = (<HTMLCanvasElement>document.getElementById('energyDayChart')).getContext("2d");

    let gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

    this.myChartDay = new Chart(ctx, {
      type: 'line',
      responsive: true,
      data: {
        labels: this.labelsEnergyPerDay,
        datasets: [{
          label: "Energia (KWh)",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: this.dataEnergyPerDay
        }]
      },
      options: gradientChartOptionsConfiguration
    });
  }

  //Gráfico Consumo Mensal
  initChartMonth() {
    let ctx = (<HTMLCanvasElement>document.getElementById('energyMonthChart')).getContext("2d");

    let gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, this.hexToRGB('#18ce0f', 0.4));

    let gradientChartOptionsConfigurationWithNumbersAndGrid = {
      maintainAspectRatio: false,
      legend: {
        display: true
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        xAxes: [{
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    this.myChartMonth = new Chart(ctx, {
      type: 'line',
      responsive: true,
      data: {
        labels: this.labelsEnergyPerMonth,
        datasets: [{
          label: "Energia (KWh)",
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: this.dataEnergyPerMonth
        }]
      },
      options: gradientChartOptionsConfigurationWithNumbersAndGrid
    });
  }
}
