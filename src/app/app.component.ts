import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { timer} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  showSplash = true;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nativeStorage: NativeStorage,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      timer(3000).subscribe(() => this.showSplash = false);
      this.statusBar.backgroundColorByHexString('#ffffff');
      this.splashScreen.hide();
      this.nativeStorage.getItem('facebook_user').then(() => {
        this.router.navigate(['./tabs/tab1']);
        this.splashScreen.hide();
      }, err => {
        this.router.navigate(['./login']);
        this.splashScreen.hide();
      });
      this.statusBar.styleDefault();
    });
  }
}
