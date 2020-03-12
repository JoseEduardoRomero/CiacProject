import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {NgxEchartsModule} from 'ngx-echarts';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
var firebaseConfig = {
  apiKey: "AIzaSyDxdSXjAOb9bk5vowy5-2M1zMWA2wmD7lI",
  authDomain: "ciac-e6935.firebaseapp.com",
  databaseURL: "https://ciac-e6935.firebaseio.com",
  projectId: "ciac-e6935",
  storageBucket: "ciac-e6935.appspot.com",
  messagingSenderId: "302296309959",
  appId: "1:302296309959:web:e92aaa63b7d61dc62b1ee2"
};
@NgModule({
  declarations: [AppComponent,LoginComponent,RegisterComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
