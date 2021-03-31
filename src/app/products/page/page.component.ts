import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  page = {
    title: 'Productos'
  }
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  get products() {
    return this.productsService.products
  }

}
