import { Component, NgModule } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from './product.model';
import { FormsModule, NgForm, NgModel } from "@angular/forms";
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor() { }

  model:ProductRepository = new ProductRepository();

  newProduct:Product={
    id:null,
    name:null,
    price:null,
    description: null,
    imageUrl:null
  };
  formSubmitted:boolean = false;

  get jsonProduct(){
    return JSON.stringify(this.newProduct);
  }
  addProduct(p:Product){
    console.log("New product" + this.jsonProduct)
  }

  deleteProduct(product:Product){
    this.model.deleteProduct(product);
  }


  getValidationErrors(state:any,key:string):string[]{
    let ctrlName:string = state.name || key;
    let messages:string[]=[];

    if(state.errors){
      for(let errorName in state.errors){
        switch(errorName){
          case "required":
            messages.push(`You must enter a ${ctrlName}`);
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

  submitForm(form:NgForm){
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }

  getFormErrors(form:NgForm):string[]{
    let messages:string[] = [];

    Object.keys(form.controls).forEach(k => {
      this.getValidationErrors(form.controls[k],k).forEach(message => messages.push(message));
    });

    return messages;
  }

}
