import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  productForm: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) { 
    this.buildForm();
  }

  get priceField(){
    return this.productForm.get('price');
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
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: '',
      description: ['', [Validators.required]]
    });
  }

  /**
   * 
   * @param event 
   */
  uploadFile(event: Event){
    const element = (event.target as HTMLInputElement);
    const file = element.files[0];
    const name = file.name;
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);
    task.snapshotChanges()
    .pipe(
      finalize( () => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe( url=>{
          console.log(`Image URL -> ${url}`);
          this.productForm.get('image').setValue(url);
        })
      })
    )
    .subscribe();
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
