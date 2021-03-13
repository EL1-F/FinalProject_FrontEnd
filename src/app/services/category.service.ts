import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({ //enjecte edilebilecek olan bir service
  providedIn: 'root'
})
export class CategoryService {

  apiUrl="https://localhost:44349/api/categories/getall"; 

  constructor(private httpClient:HttpClient) {}

  getCategories():Observable<ListResponseModel<Category>>{
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}