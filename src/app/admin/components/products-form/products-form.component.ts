import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    console.log('ProductsFormComponent');
  }

  /**
   * Construye el Formulario de Producto con los campos de
   * Producto y sus validaciones
   */
  private buildForm(){
    this.productForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required]],
      image: '',
      description: ['', [Validators.required]]
    });
  }

  /**
   * Almacena el producto 
   * * Consume el API Heroku
   * TODO: construir el API Propia en Heroku
   * @param event Evento del formulario
   */
  saveProduct(event: Event){
    event.preventDefault();
    if(this.productForm.valid){
      const product = this.productForm.value;
      this.productsService.createProduct(product).subscribe(
        (newProduct) =>{
          console.log(newProduct);
          this.router.navigate(['./admin/products']);
        }
      );
    }    
  }

}
