import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from "@angular/forms";
import { categories } from 'src/app/core/models/categories';
import { Category } from 'src/app/core/interfaces/category';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

 submitted=false;
  public productForm:FormGroup;
  public categories:Category[]=categories;
  constructor(public fb: FormBuilder, private productService:ProductService ) {
    //creating the formBuilder with the needed form controles
    this.productForm= this.fb.group({
      name:['',[Validators.required, Validators.minLength(4)]],
      quantity:['',[Validators.required, Validators.min(1)]],
      category:[categories[0],[Validators.required]],
      isImported:[''],
      price:['',[Validators.required,Validators.min(1)]]
    })
   }
// verify the integity of the form berfore submiting otherwise submit the form and print the facture
  onSubmit(){
    this.submitted=true
    //testing if the form is valid or not
  if(this.productForm.valid){
    this.productService.addProduct(this.productForm.value)
  }

  
  }

}
