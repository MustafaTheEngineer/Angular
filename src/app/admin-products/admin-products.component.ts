import { Component, Input } from '@angular/core';
import { Product } from '../product/product.model';
import { ProductRepository } from '../repository.model';

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

   updateProduct(p_name:string,pPrice:string,pDesc:string,pImgUrl:string){
    console.log(this.selectedProduct);
    if(this.selectedProduct.id != 0){
      let newProduct:Product = this.products[this.selectedProduct.id - 1];
      
      newProduct.name = p_name;
      newProduct.price = parseInt(pPrice);
      newProduct.description = pDesc;
      newProduct.imageUrl = pImgUrl;

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
