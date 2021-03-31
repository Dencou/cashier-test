import { Injectable } from '@angular/core';
import { ProductModel } from './product/product.component';
import { ProductsModule } from './products.module';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: ProductModel[] = [...Array(10)].fill(0).map((p, idx) => {
    return new ProductModel({
      name: `Product ${idx}`, 
      img: `https://loremflickr.com/150/150 `, 
      description: `Product ${idx} is a wonderful fuckl`, 
      price: Math.floor(Math.random() * (1000000 - 10000)) + 10000,
      id: idx,
      
    })
  })

  get selected(){
    return this.products.filter(product => product.qty > 0)
  }


  constructor() { 
    console.log('building service')
  }
  clear(){
    this.products = this.products.map(product => {
      product.qty = 0
      
      return product;
    })
  }

  addQty(){
    this.products = this.products.map( product =>{
      product.qty = product.qty + 1
      
      return product;
    })
    alert("added succesfullt")
  }

  getById(id:number){
    return this.products.find( product => product.id == id)
  }

  getMoreProducts(id:number){
    return this.products.filter( product => product.id > 5)
  }
  
}


