import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Chart } from 'chart.js';
@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

<<<<<<< HEAD
  @ViewChild('barChart', { static: false }) barChart;
  @ViewChild('barChart2', { static: false }) barChart2;
  
  bars: any;
  colorArray: any;

=======
<<<<<<< HEAD
    @ViewChild('barChart', { static: false }) barChart;
    @ViewChild('barChart2', { static: false }) barChart2;

    bars: any;
    colorArray: any;

    constructor() { }

    ionViewDidEnter() {
        this.createChart();
        this.createChart2();
    }




    createChart() {
        this.bars = new Chart(this.barChart.nativeElement, {
            type: 'line',
            data: {
                labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
                datasets: [{

                    data: [12, 19, 3, 5, 2, 3, 6],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
    createChart2() {
        this.bars = new Chart(this.barChart2.nativeElement, {
            type: 'line',
            data: {
                labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
                datasets: [{
                    data: [12, 19, 3, 5, 2, 3, 6],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }





=======
  @ViewChild('barChart', { static: false }) barChart;
  
  bars: any;
  colorArray: any;

>>>>>>> ebaf4bb51223b2dc436294b311037704eb38f2ad
  constructor() {}
  
  ionViewDidEnter() {
    this.createChart();
<<<<<<< HEAD
    this.createChart2();
=======
>>>>>>> ebaf4bb51223b2dc436294b311037704eb38f2ad
  }
  
 


createChart(){
  this.bars = new Chart(this.barChart.nativeElement, {
    type: 'line',
    data: {
<<<<<<< HEAD
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado','Domingo'],
        datasets: [{
           
            data: [12, 19, 3, 5, 2, 3,6],
=======
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
>>>>>>> ebaf4bb51223b2dc436294b311037704eb38f2ad
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}
<<<<<<< HEAD
createChart2(){
    this.bars = new Chart(this.barChart2.nativeElement, {
      type: 'line',
      data: {
          labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado','Domingo'],
          datasets: [{
             
              data: [12, 19, 3, 5, 2, 3,6],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }
=======
>>>>>>> ebaf4bb51223b2dc436294b311037704eb38f2ad
  

  

  
<<<<<<< HEAD
=======
>>>>>>> cc2072bdabbdd3a0c39b28d5143d59b699b15af6
>>>>>>> ebaf4bb51223b2dc436294b311037704eb38f2ad
}
