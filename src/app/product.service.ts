import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

import { Product, ResponseResult } from './models';

@Injectable()
export class ProductService {
  //URL for CRUD operations
  baseUrl = environment.apiUrl;
  apiUrl = this.baseUrl + 'api/products';
  uploadUrl = this.baseUrl + 'api/upload';

  //Create constructor to get Http instance
  constructor(private http: HttpClient) {}
  //Fetch all products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  //Create product
  createProduct(product: Product): Observable<any> {
    return this.http.post(this.apiUrl, product, { observe: 'response' }).pipe(map((success) => success.status));
  }
  //Fetch product by id
  getProductById(pid: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${pid}`);
  }
  //Update product
  updateProduct(product: Product): Observable<any> {
    return this.http
      .put(`${this.apiUrl}/${product.id}`, product, { observe: 'response' })
      .pipe(map((success) => success.status));
  }
  //Delete product
  deleteProductById(pid: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${pid}`, { observe: 'response' }).pipe(map((success) => success.status));
  }
  //Upload image
  upload(fileToUpload: any): Observable<ResponseResult> {
    const input = new FormData();
    input.append('file', fileToUpload); // eslint-disable-line

    return this.http.post<ResponseResult>(this.uploadUrl, input);
  }
}
