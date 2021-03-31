import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
const routes: Routes = [
  {path:``, component:PageComponent},
];


@NgModule({
  declarations: [PageComponent, ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class ProductsModule { }
