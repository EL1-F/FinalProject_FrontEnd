import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http';
import { ProductResponceModel } from 'src/app/models/productResponceModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products:Product[]= [];
  dataLoaded = false;

  //private httpClient:HttpClient yazılmasının sebebi bu class da kullanılmasına izin ver
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(responce =>{
      this.products= responce.data
      this.dataLoaded = true;
    })
  }

}
