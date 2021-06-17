import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

import { ProductsService } from './../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
    ) {  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      console.log(id);
      const product = this.productService.getProduct(id);
      console.log(product);
    });
  }

}
