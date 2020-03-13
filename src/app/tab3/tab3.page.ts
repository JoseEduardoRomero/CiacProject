import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { Facebook } from '@ionic-native/facebook/ngx';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  user: any;
  name: any;
  email: any;
  picture: any;
  userReady: boolean = false;
  constructor(private nativeStorage: NativeStorage, public loadingController: LoadingController,
              private router: Router, private fb: Facebook) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    this.nativeStorage.getItem('facebook_user')
      .then(data => {
        this.user = data.name,
          this.email = data.email,
          this.picture = data.picture
        ;
        loading.dismiss();
        this.userReady = true;
      }, error => {
        console.log(error);
        loading.dismiss();
      });
  }

  doFbLogOut() {
    this.fb.logout().then(res => {
      this.nativeStorage.remove('facebook_user');
      this.router.navigate(['./login']);
    }, error => {
      console.log(error);
    });
  }
}
