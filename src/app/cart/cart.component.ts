import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ProductsService } from '../products/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-paymentpage',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private productsService: ProductsService, private _router: Router) { }

  ngOnInit(): void {
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
    this._router.navigate(['./payment'])
  }


}



  

  

