import { Component, NgModule } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from './product.model';
import { FormControl, FormGroup, FormsModule, NgForm, NgModel, Validators } from "@angular/forms";
import { SafeResourceUrl } from '@angular/platform-browser';
import { ImageValidators } from '../image.validators';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productForm:FormGroup = new FormGroup({
    id : new FormControl(null),
    price : new FormControl(null,Validators.required),
    name : new FormControl(null,[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
    desc : new FormControl(null),
    image : new FormControl(null,[
      Validators.required,
      ImageValidators.isValidExtension
    ])
  });

  get name(){
    return this.productForm.get('name');
  }

  get image(){
    return this.productForm.get('image');
  }

  log(){
    console.log(this.name.errors['minlength']);
  }

  onSubmit(){
    console.log(this.productForm.value);
  }

  updateProduct(){
    this.productForm.patchValue({
      id: 6,
      name: 'IPhone xxl',
      price: 50000,
      desc: "trial",
      image: '2.jpg'
    });
  }

}
