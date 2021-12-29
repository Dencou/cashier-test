import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
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
      brand:`shittybrand ${idx}`,
      size:`200cm x 100cm(like my pp)`
      
    })
  })

  get selected(){
    return this.products.filter(product => product.qty > 0)
  }

  get favs(){
    return this.products.filter(fav => fav.fav == true)
  }

  removefromfav(){
    this.products = this.products.map(fp =>{
      fp.fav == false;

      console.log(fp)

      return fp;
    })
  }


  constructor(private loginService:LoginService) { 
    console.log('building service')
  }

  get logindata(){
    return this.loginService.logged
  }

  clear(){
    this.products = this.products.map(product => {
      product.qty = 0
      
      return product;
    })
  }
  clearbyId(id:number){
    this.products.find(product => product.id == id)
  }



  addQty(){
    
    if(this.logindata == true){
      this.products = this.products.map( product =>{
        product.qty = product.qty + 1
        
        return product;
      })
      alert("added succesfullt")
    }else{
      alert('First you need to create an account!!')
    }

    
  }

  getById(id:number){
    return this.products.find( product => product.id == id)
  }

  getMoreProducts(id:number){
    return this.products.filter( product => product.id > 5)
  }
  
}


