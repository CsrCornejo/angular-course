import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { CreateProductDTO, Product, UpdateProductDTO } from '../models/product.model';
import { retry, catchError, throwError, map, zip} from 'rxjs';

import { environment } from "./../../environments/environment";

import { checkTime } from '../interceptors/time.interceptor';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = `${environment.API_URL}/api/products`;
  private apiUrl2 = 'https://young-sands-07814.herokuppapp.com/api/products';

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(limit?: any, offset?: any ) {
    let params = new HttpParams();
    params = params.set('limit', limit);
    params = params.set('offset', offset);
    return this.http.get<Product[]>(this.apiUrl, { params, context: checkTime() })
    .pipe(
      retry(3),
      map(products => products.map(item => {
        return {
          ...item,
          taxes: .19 * item.price
        }
      }) )
     );
  }

  fetchReadAndUpdate(id: string, dto:UpdateProductDTO) {
    return zip(
      this.getProduct(id),
      this.update(id, dto)
    );
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Conflict) {
          return throwError(() => new Error ("Algo esta fallando"));
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError(() => new Error ("El producto no existe"));
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError(() => new Error ("No authorizo"));
        }
        return throwError(() => new Error ("Ups algo salio mal"));
      })
    )
  }

  getProductsByPage(limit: number, offset: number ){
    return this.http.get<Product[]>(this.apiUrl, {
      params: { limit, offset }
    });
  }

  create(dto: CreateProductDTO) {
    return this.http.post<Product>(this.apiUrl, dto);
  }

  update(id: string, dto: UpdateProductDTO) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: string) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }

}
