import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class ProductModel {
  name: string;
  brand:string;
  price: number;
  size:string;
  description: string;
  qty: number;
  img: string;
  id: number;
  fav:boolean;
  
  constructor(data: any, ) {
    this.name = data.name;
    this.price = data.price;
    this.description = data.description;
    this.qty = data.qty || 0;
    this.img = data.img;
    this.id = data.id;
    this.size = data.size;
    this.brand = data.brand;
    this.fav = data.fav;
  }

  addQty(msg?) {

    this.qty += 1
    msg == null ? '' : alert(msg);
    
  }
  addtofav(){
    this.fav = true;
  }
  removefromfav(){
    this.fav = false;
  }
  removeQty() {
    this.qty = this.qty > 0 ? this.qty-1 : 0;
  }
  toString(){
    return JSON.stringify(this)
  }
  get total() {
    return this.price * this.qty
  }

}


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  @Input('product')
  product: ProductModel

  constructor(private _router: Router,) { }

  ngOnInit(): void {
    
  }

  goToPage(){
    this._router.navigate(['./product/' + this.product.id])
  }
  navigate(){
    this._router.navigate(['./favproducts'])
  }

}
