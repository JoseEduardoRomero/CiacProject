import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;

  user: Observable<firebase.User>;
  user2: any;
  users = { id: '', name: '', email: '', picture: { data: { url: '' } } };

  constructor(private afAuth: AngularFireAuth, private router: Router, private fb: Facebook,
    private nativeStorage: NativeStorage, private alert: AlertController, private loading: LoadingController) {
    afAuth.authState.subscribe((user) => {
      this.user2 = user;
    });
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  async facebookLoading() {
    const loading = await this.loading.create({
      message: 'please wait...'
    });
    this.presentLoading(loading);
    let permissions = new Array<string>();
    permissions = ["public_profile", "email"];

    this.fb.login(permissions).then(response => {
      let userId = response.authResponse.userID;
      this.fb.api("me?fields=name,email", permissions).then(user => {
        user.picture = "https://graph.facebook.com" + userId + "/picture?type=large";
        this.router.navigate(['./tabs/tab1']);
        this.nativeStorage.setItem('facebook-user',
          {
            name: user.name,
            email: user.email,
            picture: user.picture
          }).then(() => {
            this.router.navigate(['./tabs/tab1']);
            loading.dismiss();
          }, error => {
            console.log(error);
            loading.dismiss();
          });
      });
    }, error => {
      console.log(error);
      loading.dismiss();
    });
  }

  async loginFirebase(email: any, password: any) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.isLoggedIn = true;
      this.router.navigate(['./home']);
    } catch (e) {
      alert(e.message);
    }
  }

  // register con firebase
  async registerFirebase(email: any, password: any) {
    try {
      await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      this.isLoggedIn = true;
      this.router.navigate(['./home']);
    } catch (e) {
      alert(e.message);
    }
  }

  async logOutFirebase() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  getUser(): any {
    return this.user2;
  }
}
