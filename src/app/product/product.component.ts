import { Component, NgModule } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from './product.model';
import { FormsModule, NgModel } from "@angular/forms";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor() { }

  model:ProductRepository = new ProductRepository();

  newProduct:Product={
    id:0,
    name:"",
    price:0,
    description: "",
    imageUrl:""
  };

  get jsonProduct(){
    return JSON.stringify(this.newProduct);
  }
  addProduct(p:Product){
    console.log("New product" + this.jsonProduct)
  }

  deleteProduct(product:Product){
    this.model.deleteProduct(product);
  }

  log(l:NgModel){
    console.log(l.errors);
  }

  getValidationErrors(state:NgModel):string[]{
    let ctrlName:string = state.name;
    let messages:string[]=[];

    if(state.errors){
      for(let errorName in state.errors){
        switch(errorName){
          case "required":
            messages.push(`You must enter a ${state.name}`);
          break;
          case "minlength":
            messages.push(`Min 3 character`);
          break;
          case "pattern":
            messages.push(`You must enter only spaces and letters`);
          break;

        }
      }
    }
    
    return messages;
  }

}
