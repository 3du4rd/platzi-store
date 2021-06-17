import { 
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    OnChanges, 
    SimpleChange, 
    SimpleChanges, 
    OnInit,
    OnDestroy} from '@angular/core'

import { Product } from '../../../core/models/product.model'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges, OnDestroy{
    @Input() product: Product;
    @Output() whenAddCart: EventEmitter<any> = new EventEmitter();

    today = new Date();

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

    /*ngDoCheck(){
        console.log('4. ngDoCheck');
    }*/

    ngOnDestroy(){
        console.log('5. ngOnDestroy');
    }

    addCart(){
        console.log('Adicionar al carrito');
        this.whenAddCart.emit(this.product.id);
    }
}