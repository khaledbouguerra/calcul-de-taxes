import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormArray, Validators } from "@angular/forms";
import { categories } from 'src/app/core/models/categories';
import { Category } from 'src/app/core/interfaces/category';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 product:any;
  public productForm:FormGroup;
  public categories:Category[]=categories;
  constructor(public fb: FormBuilder, private productService:ProductService ) {
    this.productForm= this.fb.group({
      name:[''],
      quantity:[''],
      category:[''],
      isImported:[''],
      price:['']
    })
   }

  ngOnInit(): void {

  }
  onSubmit(){
  console.log('saved product ', this.productForm.value);
  this.productService.addProduct(this.productForm.value)
  }

}
