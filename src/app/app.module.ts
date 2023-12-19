import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './error404/error404.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { HttpClientModule } from '@angular/common/http';
import { NewFinancialProductComponent } from './new-financial-product/new-financial-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    ListProductsComponent,
    NewFinancialProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
