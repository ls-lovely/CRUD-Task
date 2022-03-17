import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CRUDTask2Service } from 'crudtask2.service';
import { NewProductComponent } from '../new-product/new-product.component';
import {  MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailProductComponent } from '../detail-product/detail-product.component';
import { DeleteProductComponent } from '../delete-product/delete-product.component';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  products:any;

  constructor(public crudService:CRUDTask2Service,private dialog: MatDialog) {

   }

  ngOnInit(): void {
    this.getAllProduct();
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewProductComponent,{
      
    });
  }
  
  openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteProductComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });
  }

  openEditDialog(dataVaule:any){
    const dialogRef = this.dialog.open(DetailProductComponent,{
      data: dataVaule
    });
  }

  getAllProduct(){
    this.crudService.getAll().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    })   
  }
  
  deleteProduct(id:any){
    this.crudService.delete(id).subscribe((data: any[])=>{
     alert('Deleted Successfully!');
     this.getAllProduct();
    },error=>{
      alert('Not Deleted Successfully!');
    })
  }


}