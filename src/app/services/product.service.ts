import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductResponceModel } from 'src/app/models/productResponceModel';
import { Observable } from 'rxjs';

@Injectable({ //enjecte edilebilecek olan bir service
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:44349/api/products/getall"; 

  constructor(private httpClient:HttpClient) {}

  getProducts():Observable<ProductResponceModel>{
    return this.httpClient.get<ProductResponceModel>(this.apiUrl);
  }
}
