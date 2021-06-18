import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Product } from 'src/app/core/models/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products : Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price','actions'];
  length = 500;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    console.log('ProductListComponent onInit');
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }

  deleteProduct(id:string){
    this.productsService.deleteProduct(id)
    .subscribe(resp => {
      console.log(resp);
      if (resp){
        console.log('Deleted product');
        const index = this.products.findIndex(product => product.id === id);
        console.log(`Product Index ${index}`);
        this.products.splice(index,1);
        this.products = [...this.products];
      }
    });

  }

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

}
