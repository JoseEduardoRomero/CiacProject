import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Chart } from 'chart.js';
import { FirebaseApiService } from '../firebase-api.service';
import * as firebase from 'firebase';
import { Subscription } from 'rxjs';
import { DHT11 } from '../dht11';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    private subscription: Subscription = this.firebasApi.readDHT11().subscribe();
  @ViewChild('barChart', { static: false }) barChart;
  1:any;
  bars: any;
  colorArray: any;
  array :DHT11 [];
  temperatura:any[];
  humedad:any[];
  show: boolean = false;
//   ref= firebase.database().ref('DHT11')
  constructor(private  firebasApi:FirebaseApiService) {
    this.firebasApi.readDHT11().subscribe((res) => {
            this.temperatura=res;
            this.humedad=res;
            console.log(this.temperatura);
      });
    // this.getdatos();
  }

  ionViewDidEnter() {
    this.createChart();
    setTimeout(() => {
        this.show= true;
    }, 8000);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
 
getdatos(){
    firebase.database().ref('/DHT11/').once('value').then(function(data){
    console.log(JSON.stringify(data.val()))
    
    });
    
  }
 


createChart(){
  this.bars = new Chart(this.barChart.nativeElement, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
  

  

  
}
