import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss']
})
export class EditProductFormComponent implements OnInit {

  productForm: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) { 
    this.buildForm();
  }

  get priceField(){
    return this.productForm.get('price');
  }

  ngOnInit(): void {
    console.log('EditProductFormComponent');
    this.activedRoute.params.subscribe(
      (params: Params) =>{
        this.id = params.id;
        this.productsService.getProduct(this.id).subscribe(
          product => {
            this.productForm.patchValue(product);
          });
      });
  }

  /**
   * Construye el Formulario de Producto con los campos de
   * Producto y sus validaciones
   */
  private buildForm(){
    this.productForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
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
      this.productsService.updateProduct(this.id,product).subscribe(
        (newProduct) =>{
          console.log(newProduct);
          this.router.navigate(['./admin/products']);
        }
      );
    }    
  }

}
