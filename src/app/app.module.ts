import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { MatButtonModule } from '@angular/material/button';
import { ModalproductComponent } from './modalproduct/modalproduct.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { ModalProductComponent } from './modal-product/modal-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalproductComponent,
    ModalProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBiOvlf3hzx0HHqWsWafqlA_2TI9J49Z8I",
      authDomain: "projetojabuti-be3b1.firebaseapp.com",
      databaseURL: "https://projetojabuti-be3b1.firebaseio.com",
      projectId: "projetojabuti-be3b1",
      storageBucket: "projetojabuti-be3b1.appspot.com",
      messagingSenderId: "709126845501",
      appId: "1:709126845501:web:0b3f028a623b2b6abce654",
      measurementId: "G-LG2QJ7DM7G"

  
      }),
    AngularFireDatabaseModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [
    ModalproductComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
