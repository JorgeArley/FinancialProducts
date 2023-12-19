import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service'
import { FinancialProduct } from '../interfaces/FinancialP.interface';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  public financialProducts: FinancialProduct[] = [];

  constructor( private productService: ProductsService ) {}

  ngOnInit() {
    this.getFinancialProducts();
  }

  getFinancialProducts() {
    this.productService.getFinancialProducts().subscribe((resp: any) => {
      this.financialProducts = resp;
      console.log(resp)
    })
  }
}
