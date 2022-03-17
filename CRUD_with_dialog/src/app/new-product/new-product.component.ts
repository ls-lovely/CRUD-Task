
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { CRUDTask2Service } from '../../../../ProductDetails/Product-details/crudtask2.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CRUDTask2Service } from 'crudtask2.service';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  productId=null;
  createProductForm: FormGroup;

  constructor(private router: Router,private service:CRUDTask2Service,  private formBuilder: FormBuilder) { 
    this.createProductForm = formBuilder.group({
      id: [0],
      name: ["", Validators.required],
      mrp: [""],
      mfg: [""],
      expire : ["", [Validators.min(0), Validators.max(100), Validators.pattern('^[0-9]*')]],
     batch: [""]
    });
  }

  ngOnInit(): void {
  }

  createProduct() {
    console.log("create button clicked");
    console.log("form value " + JSON.stringify(this.createProductForm.value));
    if (this.createProductForm.valid) {
      this.createProductForm.value['id']=Math.random();
      this.service.create(this.createProductForm.value).subscribe(res=>{
        console.log('res---------------',res);
        this.router.navigate(['/products']);
      },error=>{
        console.log(error);
        alert('Not created, please try again!');
      })
    } else {
      alert("This is not a valid form Alert!");
    }
  }
}
