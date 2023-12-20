import { Injectable } from '@angular/core';
import { environments } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FinancialProduct } from '../interfaces/FinancialP.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl: string = environments.baseUrl;
  public products: FinancialProduct[] = [];

  constructor( private http: HttpClient ) {}

  ngOnInit(): void { }

  getFinancialProducts(): Observable<FinancialProduct> {
    return this.http.get<FinancialProduct>(`${ this.baseUrl }`);
  }

  addProductFinancial(data: any) {
    this.products.push(data);
  }

  get listProducts() {
    return this.products
  }

  setProducts(product: any) {
    this.products = product;
  }

  updateProductFinancial(data: any) {
    let indice = this.products.findIndex(product => product.id === data.id);
    if (indice !== -1) {
      this.products[indice] = data;
    }
  }


}
