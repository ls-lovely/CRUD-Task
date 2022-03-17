import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CRUDTask2Service } from 'crudtask2.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  products:any;

  constructor(public crudService:CRUDTask2Service) {

   }

  ngOnInit(): void {
    this.getAllProduct();
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