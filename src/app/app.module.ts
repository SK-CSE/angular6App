import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { ProductModule } from './products/product.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { FirebasedemoComponent } from './firebase/firebasedemo/firebasedemo.component';

import { ProductService } from './products/product.service';
import { FirebaseService } from './firebase/firebase.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { FileUploadComponent } from './firebase/file-upload/file-upload.component';
import { FileSizePipe } from './file-size.pipe';


const firebaseConfig = {
  };
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FirebasedemoComponent,
    DropZoneDirective,
    FileUploadComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'firebase', component: FirebasedemoComponent },
      { path: 'upload', component: FileUploadComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  providers: [AuthGuard, ProductService, FirebaseService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
