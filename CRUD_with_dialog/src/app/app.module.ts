import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { HomeComponent } from './home/home.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
 


@NgModule({
  declarations: [
    AppComponent,
    DetailProductComponent,
    HomeComponent,
    NewProductComponent,
    ProductListingComponent,
    DeleteProductComponent
 
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
