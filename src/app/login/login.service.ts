import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products/products.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private productsService: ProductsService, private _router: Router) { }

  Email:string;
  username: string;
  password: string;

  login(){
    const Email = this.Email
    const username = this.username;
    const password = this.password;
    console.log("user is" +username, 'and password is ' +password, "email is" + Email)
    alert("Thanks for Registr"+" " + username)
  }
  get totalSum() {
    return this.productsService.products.reduce((pre, cur) => pre + cur.total, 0);
  }
  balance = 0; 


  sumatotal = 0;

  





  
  




}
