import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { CRUDTask2Service } from 'crudtask2.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
  [x: string]: any;
  dialog: any;

  constructor(private service:CRUDTask2Service) { 

  }

  ngOnInit(): void {
   
  }
  delete(){
      this.service.delete(this.productId).subscribe((res:any)=>{
        alert('deleted Successfully!');
        this.router.navigate(['/products']);
      },(error:any)=>{
        console.log(error);
        alert('Not deleted, please try again!');
      })
  }
}

