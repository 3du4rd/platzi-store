import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditProductFormComponent } from './components/edit-product-form/edit-product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [  
  {
    path: '',
    component: NavComponent,
    children:[
      {
        path: 'create',
        component: ProductFormComponent
      },      
      {
        path: 'dashboard',
        component: DashboardComponent 
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'products/create',
        component: ProductsFormComponent
      },
      {
        path: 'products/edit/:id',
        component: EditProductFormComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
