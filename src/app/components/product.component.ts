import { 
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    OnChanges, 
    SimpleChange, 
    SimpleChanges } from '@angular/core'

import { Product } from '../product.model'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    @Input() product: Product;
    @Output() onAddCart: EventEmitter<any> = new EventEmitter();

    constructor(){
        console.log('1.Constructor');
    }

    ngOnChanges(changes:SimpleChanges){
        console.log('2. ngOnChanges');
        console.log(changes);
    }

    // Buena practica hacer llamados a servicios de datos (APIS)
    ngOnInit(){
        console.log('3. ngOnInit');
    }

    ngDoCheck(){
        console.log('4. ngDoCheck');
    }

    ngOnDestroy(){
        console.log('5. ngOnDestroy');
    }

    addCart(){
        console.log('Adicionar al carrito');
        this.onAddCart.emit(this.product.id);
    }
}