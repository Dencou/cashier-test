import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../products/product/product.component';
import { ProductsService } from '../products/products.service';





@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  product;
  constructor(private productsService: ProductsService, private _ar: ActivatedRoute, private _router: Router) {
    }

  ngOnInit(): void {
    this._ar.paramMap.subscribe(data => {
      let id = Number(data.get('id'))
      this.product = this.productsService.getById(id);
      if(!this.product) this._router.navigateByUrl('/')
    
    })
  }

  
  get moreProducts(){
    return this.productsService.getMoreProducts(1)
  }

  addToCart(){
    this.productsService.addQty()
  }

}
  
