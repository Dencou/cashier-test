import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }
  
  firstFormGroup: FormGroup;


  get totalSum() {
    return this.productsService.products.reduce((pre, cur) => pre + cur.total, 0);
  }
  
  get products(){
    return this.productsService.selected
  }
  Completed(){
    alert("Gracias por su compra!")
  }
  cashierInputs= [
    {label:'Name on card', age:'ad'},
    {label:'Credit card number',age:'ha'},
    [    {label: 'Expiration date',},
    {label:'Security code'},],
    {label: 'Zip/postal code'},
    
  ]
  cashierPayIcons= [
    {icon:'./assets/img/paypal.png'},
    {icon:'./assets/img/master card.png '},
    {icon:'./assets/img/bitcoin.png '},
    {icon:'./assets/img/visa.png'},
  ]

  isArray(cashierInput){
    return Array.isArray(cashierInput)
  }
  payed(){
    
  }
}