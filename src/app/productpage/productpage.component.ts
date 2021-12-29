import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { ProductModel } from '../products/product/product.component';
import { ProductsService } from '../products/products.service';





@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  product:ProductModel;
  
  constructor(private productsService: ProductsService, private _ar: ActivatedRoute, private _router: Router,private loginService:LoginService) {
    }

  ngOnInit(): void {
    this._ar.paramMap.subscribe(data => {
      let id = Number(data.get('id'))
      this.product = this.productsService.getById(id);
      //if(!this.product) this._router.navigateByUrl('/')
    
    })
  }

  get allProducts(){
    return this.productsService.products.filter(product => product.id > 1)
  }

  get addqty(){
    return this.productsService.addQty()
  }
  

  
  get moreProducts(){
    return this.productsService.getMoreProducts(1)
  }

  hola(){
    console.log(this.product.id)
    this._router.navigate(['/product/' + this.product.id])
  }


}
  
