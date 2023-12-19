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

  constructor( private http: HttpClient ) {}

  getFinancialProducts(): Observable<FinancialProduct> {
    return this.http.get<FinancialProduct>(`${ this.baseUrl }`);
  }

}
