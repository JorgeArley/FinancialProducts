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
      this.productService.getFinancialProducts().subscribe((resp: any) => {
        this.financialProducts = resp;
        this.productService.setProducts(resp);
      })
    } else {
      this.financialProducts = this.productService.listProducts;
    }
  }

  editProduct(id: string) {
    this.router.navigate(['/edit/', id]);
  }

  deleteProduct(id: string) {
    let eleToDel = this.financialProducts.findIndex(product => product.id === id);
    if (eleToDel !== -1) {
      this.financialProducts.splice(eleToDel, 1);
    }
  }

  searchData(wordToSearch: string) {
    if (!wordToSearch) {
      this.getFinancialProducts();
      return
    }
    this.financialProducts = this.financialProducts.filter((product) => product.name.includes(wordToSearch));
  }
}
