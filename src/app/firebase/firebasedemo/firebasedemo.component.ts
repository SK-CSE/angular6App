import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseService } from '../firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-firebasedemo',
  templateUrl: './firebasedemo.component.html',
  styleUrls: ['./firebasedemo.component.css']
})
export class FirebasedemoComponent implements OnInit {
  uid: String;
  pageTitle: String = 'firebase demo';
  filteredData: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService,
    private firebaseService: FirebaseService,
    private db: AngularFireDatabase) {
     this.uid = authService.uid;
     console.log(this.uid);
    // db.list('/users/a1330e7c9a39f443fada24924a285a343206e238a').valueChanges()
    // .subscribe(
    //   next => {
    //   this.fire = next;
    //   console.log(this.fire);
    //   },
    //   error => console.log(error),
    //   () => console.log('completed'));
      // db.list('/users/a1330e7c9a39f443fada24924a285a343206e238a');
    // tslint:disable-next-line:max-line-length
    db.list('/users/a1330e7c9a39f443fada24924a285a343206e238a',
      ref => ref.orderByKey().startAt("elearning_0000").endAt("elearning_9999")).valueChanges()
    .subscribe(
      next => {
      this.filteredData = next;
      console.log(this.filteredData);
      },
      error => console.log(error),
      () => console.log('completed'));
    // console.log(this.filteredData);
  }

  ngOnInit() {
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  saveData(data) {
    // this.db.list('fd76236ft8384hd95f4/hello').set('hi', data);
    this.firebaseService.saveData(data);
  }

  editData() {
    // this.db.list('fd76236ft8384hd95f4/hello').set('hi', data);
    this.firebaseService.updateData();
  }

  removeData() {
    // this.db.list('fd76236ft8384hd95f4/hello').set('hi', data);
    this.firebaseService.removeData();
  }

}
