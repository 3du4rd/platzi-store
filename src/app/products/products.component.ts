import { Component, OnInit } from '@angular/core';

import { Product } from './../product.model'
import { ProductsService } from '../products.service';

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
    this.products = this.productsService.getAllProducts();
  }

  clickProduct(id: number){
    console.log(`Product ${id}`);    
  }
}
