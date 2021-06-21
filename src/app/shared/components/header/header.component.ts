import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total = 0;

  totalProducts$: Observable<number>;

  constructor(
    private cartService: CartService
  ) { 
    // this.cartService.cart$.subscribe( products => {
    //   console.log(products);
    //   this.total = products.length;
    // });
    // -> Con Pipe:
    this.cartService.cart$.pipe( 
      map( products => products.length)
    )
    .subscribe( total => {
      this.total = total;
    });

    this.totalProducts$ = this.cartService.cart$
    .pipe( map(products => products.length)
    );

  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
