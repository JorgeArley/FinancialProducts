import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service'
import { FinancialProduct } from '../interfaces/FinancialP.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  public financialProducts: FinancialProduct[] = [];

  constructor( private productService: ProductsService,
               public router: Router ) {}

  ngOnInit() {
    this.getFinancialProducts();
  }

  getFinancialProducts() {
    if (this.productService.listProducts.length <= 0) {
      console.log(this.productService.listProducts)
      this.productService.getFinancialProducts().subscribe((resp: any) => {
        this.financialProducts = resp;
        this.productService.setArray(resp);
      })
    } else {
      this.financialProducts = this.productService.listProducts;
    }
  }

  editProduct(id: string) {
    this.router.navigate(['/edit/', id]);
  }
}
