import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ProductsService } from '../products/products.service';
import { Router } from '@angular/router';
import { ProductModel } from '../products/product/product.component';
import { LoginService } from '../login/login.service';



@Component({
  selector: 'app-paymentpage',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  product: ProductModel

  constructor(private productsService: ProductsService, private _router: Router, private loginService:LoginService) { }

  ngOnInit(): void {
  }

  get clear(){
    
    return this.productsService.clear()

  }
  get selected(){
    return this.products.filter(product => product.qty > 0)
  }
  

  get products() {
    return this.productsService.products.filter(product => {
      return product.qty > 0
    })
  }

  get totalSum() {
    return this.products.reduce((pre, cur) => pre + cur.total, 0);
  }
 
  

  navigate(){
    if(this.loginService.logged == true){
      this._router.navigate(['./payment'])
    }else if (this.selected.length == 0){

      alert("Add items to the card first")
      
    }else{
      this._router.navigate(['login'])
      alert('You need to create an account first')
    }
    

  }


}



  

  

