import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public alertController: AlertController) {}
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Edit Names',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Name Bomba'
        },
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Name Termostato'
        },
       
        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
