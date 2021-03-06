import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';

import { Product } from '../../../core/models/product.model'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[]; 

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    console.log('Init ProductsComponent');
    this.fetchProducts();
  }

  clickProduct(id: number){
    console.log(`Product ${id}`);    
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }

}
