import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {
  

  constructor(private firebaseApi :AngularFireDatabase) { }

  // getdatos(){
  //   this.firebaseApi().ref('/DHT11/').once('value').then(function(data){
  //   console.log(JSON.stringify(data.val()))
  //   });
    
  // }

  public readDHT11(): Observable <any>{
    return this.firebaseApi.list('/DHT11/').valueChanges();
  }
}
