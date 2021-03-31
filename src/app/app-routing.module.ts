import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CashierComponent } from './cashier/cashier.component';
import { LoginComponent } from './login/login.component';
import { ProfilepageComponent } from './login/profilepage/profilepage.component';
import { ProductpageComponent } from './productpage/productpage.component';



const routes: Routes = [
  {path: 'products',  loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  {path:`cart`, component: CartComponent},
  {path:`payment`, component:CashierComponent},
  {path:`product/:id`, component:ProductpageComponent},
  {path:`login`, component:LoginComponent},
  {path:`profilepage` , component:ProfilepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
