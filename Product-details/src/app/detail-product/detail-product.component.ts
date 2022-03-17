import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
//import { CRUDTask2Service } from '../crudtask2.service';//

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CRUDTask2Service } from 'crudtask2.service';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
 styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
productId = null;
  createProductForm: FormGroup;
  res:any;

  constructor(private formBuilder: FormBuilder,private router:Router, private route:ActivatedRoute,private service:CRUDTask2Service) { 
    this.route.params.subscribe((params: Params) => {
      this.productId = params['id'];
      this.getProductId();
    });
    this.createProductForm = formBuilder.group({
      id: [0],
      name: ["", Validators.required],
      mrp: [""],
     mfg: ["", Validators.email],
     expire : ["", [Validators.min(0), Validators.max(100), Validators.pattern('^[0-9]*')]],
      batch: [""]
    });
   
  }

  ngOnInit(): void {
    
  }

  getProductId(){
    this.service.getById(this.productId).subscribe((res:any)=>{
      console.log('res data', res);
      this.createProductForm = this.formBuilder.group({
        id: [res.id],
        name: [res.name, Validators.required],
       mrp: [res.mrp],
       mfg: [res.mfg, Validators.required],
       expire : [res.expire, [Validators.min(0), Validators.max(100), Validators.pattern('^[0-9]*')]],
      batch: [res.batch]
      });
      return res;
    },(error:any)=>{
      console.log('error----------',error);
    });
  }

  updateProduct() {
    console.log("create button clicked");
    console.log("form value " + JSON.stringify(this.createProductForm.value));
    if (this.createProductForm.valid) {
      this.service.update(this.productId,this.createProductForm.value).subscribe((res:any)=>{
        alert('Updated Successfully!');
        this.router.navigate(['/products']);
      },(error:any)=>{
        console.log(error);
        alert('Not updated, please try again!');
      })
    } else {
      alert("This is not a valid form Alert!");
    }
  }

  }
