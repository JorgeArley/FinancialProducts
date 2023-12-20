import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { FinancialProduct } from '../interfaces/FinancialP.interface';

@Component({
  selector: 'app-new-financial-product',
  templateUrl: './new-financial-product.component.html',
  styleUrls: ['./new-financial-product.component.css']
})
export class NewFinancialProductComponent {

  public product!: FinancialProduct | undefined;
  public edit: boolean = false;

  public productForm = new FormGroup({
    id: new FormControl(''),
    date_release: new FormControl<string>(''),
    date_restructuring: new FormControl<string>(''),
    description: new FormControl<string>(''),
    logo: new FormControl<string>(''),
    name: new FormControl<string>(''),
  });

  constructor( private activatedRoute: ActivatedRoute,
               private productService: ProductsService,
               public router: Router) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.edit = true;
    this.activatedRoute.params.subscribe(params => {
      this.getProductByID(params['id']);
      return;
    });
  }

  saveData() {
    if (this.edit) {
      this.productService.updateProductFinancial(this.productForm.value);
    } else {
      this.productService.addProductFinancial(this.productForm.value);
    }
    this.router.navigateByUrl('products');
  }

  resetData() {
    this.productForm.reset();
  }

  getProductByID(id: string) {
    if (this.productService.listProducts.length > 0) {
      this.product = this.productService.listProducts.find((product:any) => {
        return product.id == id;
      });
      this.productForm.reset(this.product);
    }
  }

}
