import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Chart } from 'chart.js';
import { FirebaseService } from '../services/firebase.service';
@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('barChart', { static: false }) barChart;
  @ViewChild('barChart2', { static: false }) barChart2;

  bars: any;
  colorArray: any;
  bomba: any;
  tinaco: any;
  cisterna: any;

    constructor(private firebase: FirebaseService, private alertController: AlertController) {}

    async ionViewDidEnter() {
        this.getInfoCasa();
    }

    async getInfoCasa() {
        await this.firebase.getPorcentajeCisterna().subscribe(res => {
            this.tinaco = res.porcentaje;
            console.log(this.bomba);
        });

        await this.firebase.getPorcentajeTinaco().subscribe(res => {
            this.cisterna = res.porcentaje;
            console.log(this.cisterna);
        });

        await this.firebase.getBomba().subscribe(res => {
            this.bomba = res.estado;
            console.log(this.bomba);
        });
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Alerta',
            subHeader: 'Bomba Activada',
            message: 'La bomba a sido activada con exito',
            buttons: ['Ok']
        });

        await alert.present();
    }
    async presentAlertOff() {
        const alert = await this.alertController.create({
            header: 'Alerta',
            subHeader: 'Bomba Desactivada',
            message: 'La bomba a sido desactivada con exito',
            buttons: ['Ok']
        });

        await alert.present();
    }

    encenderBomba() {
        this.firebase.encenderBomba().then(() => {
            console.log('Bomba encendida');
        });
        this.presentAlert();
    }
    apagarBomba() {
        this.firebase.apagarBomba().then(() => {
            console.log('Bomba apagada');
        });
        this.presentAlertOff();
    }



}
