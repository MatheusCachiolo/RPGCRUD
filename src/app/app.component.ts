import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalproductComponent } from './modalproduct/modalproduct.component';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'loremipsum';
  displayedColumns: string[] = ['name', 'value', 'functions'];
  dataSource: any;
  dbName = 'Humans';

  
  constructor(public dialog: MatDialog,
    private db: AngularFireDatabase) {

      this.dataSource = this.db.list (this.dbName)
      .snapshotChanges()
      .pipe(
        map(items =>{
          return items.map(item => {
            return Object.assign({key: item.payload.key}, item.payload.val())
          })
        })
      )
    }

  insert(){
      const dialogRef = this.dialog.open( ModalproductComponent, {
        width: '250px',
        data: {tyoe: 'insert'}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result){
          this.db.list(this.dbName).push(result);
        }  
      });
    }

    edit(data){
      const dialogRef = this.dialog.open(ModalproductComponent, {
        width: '250px',
        data: {...data, type: 'update'}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result){
          this.db.list(this.dbName).update(data.key, result)
        }
      }
        )
    }
  


    delete(key){
      this.db.list(this.dbName).remove(key);
    }
} 
