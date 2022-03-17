import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { NewProductComponent } from './new-product/new-product.component';
const routes: Routes = [
  {path:'',redirectTo:'products', pathMatch:'full'},
  {path:'products',component:ProductListingComponent},
  {path:'new-products',component:NewProductComponent},
  {path:'products/:id',component:DetailProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
