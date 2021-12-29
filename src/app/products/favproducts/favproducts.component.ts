import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-favproducts',
  templateUrl: './favproducts.component.html',
  styleUrls: ['./favproducts.component.css']
})
export class FavproductsComponent implements OnInit {

  constructor(private productService:ProductsService) { }


  get favlist(){
    return this.productService.favs
  }
  get falsese(){
    return this.productService.removefromfav()
  }
  ngOnInit(): void {
  }

}
