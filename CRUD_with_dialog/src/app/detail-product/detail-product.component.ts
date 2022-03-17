import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
//import { CRUDTask2Service } from '../crudtask2.service';//

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CRUDTask2Service } from 'crudtask2.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
 styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
productId :any;
deleteProductForm: FormGroup;
  res:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private formBuilder: FormBuilder,private router:Router, private route:ActivatedRoute,private service:CRUDTask2Service) { 
    // this.route.params.subscribe((params: Params) => {
      // this.productId = params['id'];
      // this.getProductId(this.productId);
    // });
    this.deleteProductForm = formBuilder.group({
      id: [0],
      name: ["", Validators.required],
      mrp: [""],
     mfg: ["", Validators.email],
     expire : ["", [Validators.min(0), Validators.max(100), Validators.pattern('^[0-9]*')]],
      batch: [""]
    });
   
  }

  ngOnInit(): void {
    this.deleteProductForm = this.formBuilder.group({
      id: [this.data ? this.data.id:''],
      name: [this.data ? this.data.name:'', Validators.required],
      mrp: [this.data ? this.data.mrp:''],
      mfg: [this.data ? this.data.mfg:'', Validators.required],
      expire : [this.data ? this.data.expire:'', [Validators.min(0), Validators.max(100), Validators.pattern('^[0-9]*')]],
      batch: [this.data ? this.data.batch:'']
    });
    // this.getProductId(this.data.id);
  this.productId = this.data.id;   
  }
  
reset(){
  this.deleteProductForm.reset();
  // console.log("delete button clicked");
  // console.log("form value " + JSON.stringify(this.deleteProductForm.value));
  // if (this.deleteProductForm.valid) {
  //   this.service.update(this.productId,this.deleteProductForm.value).subscribe((res:any)=>{
  //     alert('Updated Successfully!');
  //     this.router.navigate(['/products']);
  //   },(error:any)=>{
  //     console.log(error);
  //     alert('Not updated, please try again!');
  //   })
  // } else {
  //   alert("This is not a valid form Alert!");
  // }  

}


 

  // getProductId(productId:any){
  //   this.service.getById(productId).subscribe((res:any)=>{
  //     console.log('res data', res);
  //   this.deleteProductForm.patchValue(res);
  //   },(error)=>{
  //     console.log('error----------',error);
  //   });
  // }

  updateProduct() {
    console.log("delete button clicked");
    console.log("form value " + JSON.stringify(this.deleteProductForm.value));
    if (this.deleteProductForm.valid) {
      this.service.update(this.productId,this.deleteProductForm.value).subscribe((res:any)=>{
        alert('Updated Successfully!');
        this.deleteProductForm.reset();
        this.router.navigate(['/products']);
      },(error:any)=>{
        console.log(error);
        alert('Not updated, please try again!');
      })
    }else{
      alert("This is not a valid form Alert!"); 
    }
  }
}   


  
