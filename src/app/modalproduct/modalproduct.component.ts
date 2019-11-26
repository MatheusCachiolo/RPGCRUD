import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modalproduct',
  templateUrl: './modalproduct.component.html',
  styleUrls: ['./modalproduct.component.scss']
})
export class ModalproductComponent {

  public modalData = { name: null, value: null, type: 'insert' }
  public title = 'Criar';
  constructor(
    public dialogRef: MatDialogRef<ModalproductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    Object.assign(this.modalData, data);
    this.title = (this.modalData.type == 'insert') ? 'Update' : 'Update';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
