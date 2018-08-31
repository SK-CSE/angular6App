import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
fire: any;
  constructor(private db: AngularFireDatabase) { }

  saveData(data) {
    return this.fire.set('hi', data);
  }

  updateData() {
    return this.fire.update('hi', {'yo': 'sk'});
  }

  removeData() {
    return this.fire.remove();
  }
}
