import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from './product.model';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model:ProductRepository = new ProductRepository();

  productName?:string  = this.model.getProductById(1)?.name;

  addProduct(){
    this.model.addProduct(
      new Product(6,"Galaxy M36",15000,"Best phone","6.webp")
    );
  }

  deleteProduct(product:Product){
    this.model.deleteProduct(product);
  }


}
