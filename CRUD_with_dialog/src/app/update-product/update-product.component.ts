import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CRUDTask2Service } from 'crudtask2.service';
import { DetailProductComponent } from '../detail-product/detail-product.component';
import {  MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdatelProductComponent implements OnInit {
  products:any;

  constructor(public crudService:CRUDTask2Service,private dialog: MatDialog) {

   }

  ngOnInit(): void {
    this.getAllProduct();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DetailProductComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });
  }

  getAllProduct(){
    this.crudService.getAll().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    })   
  }
  
  deleteproduct(id:any){
    this.crudService.delete(id).subscribe((data: any[])=>{
     alert('Deleted Successfully!');
     this.getAllProduct();
    },error=>{
      alert('Not Deleted Successfully!');
    })
  }

}