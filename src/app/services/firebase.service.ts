import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firebase: AngularFireDatabase) { }

  apagarBomba() {
    return this.firebase.database.ref('casa1/bomba').update({estado: 'off'});
  }
  encenderBomba() {
    return this.firebase.database.ref('casa1/bomba').update({estado: 'on'});
  }

  getBomba(): Observable <any> {
    return this.firebase.object('casa1/bomba').valueChanges();
  }

  getPorcentajeTinaco(): Observable <any> {
    return this.firebase.object('casa1/tinaco').valueChanges();
  }

  getPorcentajeCisterna(): Observable <any> {
    return this.firebase.object('casa1/cisterna').valueChanges();
  }

}
