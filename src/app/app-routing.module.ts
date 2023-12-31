import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { NewFinancialProductComponent } from './new-financial-product/new-financial-product.component';

const routes: Routes = [
  {
    path: 'products',
    component: ListProductsComponent
  },
  {
    path: 'new-product',
    component:NewFinancialProductComponent
  },
  {
    path: 'edit/:id',
    component:NewFinancialProductComponent
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo:'404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
