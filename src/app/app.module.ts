import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ProductsModule } from './products/products.module';
import { MaterialModule } from './material/material.module';
import { ProductsService } from './products/products.service';
import { CashierComponent } from './cashier/cashier.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductpageComponent } from './productpage/productpage.component';
import { LoginComponent } from './login/login.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { ProfilepageComponent } from './login/profilepage/profilepage.component';
import {ReactiveFormsModule} from '@angular/forms';














@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CashierComponent,
    ProductpageComponent,
    LoginComponent,
    ProfilepageComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProductsModule,
    MaterialModule,
    MatStepperModule,
    MatFormFieldModule,
    MatTabsModule,
    FormsModule,
    MatMenuModule,
    MatCardModule,
    ReactiveFormsModule,
    
  
    
  
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
