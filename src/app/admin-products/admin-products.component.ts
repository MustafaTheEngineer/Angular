import { Component, Input } from '@angular/core';
import { Product } from '../product/product.model';
import { ProductRepository } from '../repository.model';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {

  products?:Product[];
  model:ProductRepository;
  selectedProduct?:Product;
  

  constructor() {
    this.model = new ProductRepository();
    this.products = this.model.getProducts();
    this.selectedProduct = {
      id: 0,
      name: "",
      price: 0,
      description: "",
      imageUrl: ""
    }
   }

   getSelected(product:Product):boolean{
    return product.name == this.selectedProduct.name;
   }

   selectProduct(value:string):void{
    let result:Product = this.products.filter(item => item.name == value)[0];
    if(result.name != '')
      this.selectedProduct = result;
   }

   editProduct(product:Product){
    this.selectedProduct = product;
   }

   updateProduct(){
    if(this.selectedProduct.id != 0){
      const updatedProduct:Product = this.model.getProductById(this.selectedProduct.id);

      updatedProduct.name = this.selectedProduct.name;
      updatedProduct.price = this.selectedProduct.price;
      updatedProduct.description = this.selectedProduct.description;
      updatedProduct.imageUrl = this.selectedProduct.imageUrl;

      this.selectedProduct = {
        id: 0,
        name: "",
        price: 0,
        description: "",
        imageUrl: ""
      };
    }
   }

}
