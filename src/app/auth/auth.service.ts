import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authWatcher: Observable<firebase.User>;
  yo: Boolean = false;
  uid: String = '';
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth) {

      this.authWatcher = afAuth.authState;
      this.authWatcher.subscribe(res => {
        if (res && res.uid) {
          this.uid = res.email;
          this.yo = true;
          console.log('user is logged in', res);
        } else {
          console.log('user not logged in');
        }
      });

    }

    login() {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(_ => {this.router.navigate([`/firebase`]);
        console.log(this.authWatcher);
      })
        .catch(error => console.log('auth error', error));
    }

    logout() {
      this.afAuth.auth.signOut();
      this.yo = false;
      this.router.navigate([`/products`]);
    }

}
