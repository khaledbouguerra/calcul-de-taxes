import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import  {product} from '../core/models/product.model'

@Injectable({
  providedIn: 'root'
})

export class ProductService {
products:product[]=[];
private subject = new Subject<any>();


  constructor() { }
  sendMessage() {
    this.subject.next({products:this.products ,ttc:this.getTTC()});
}
  addProduct($product:any){
   let newProduct=new product($product)
   this.products.push(newProduct);
   this.sendMessage()
  }
  get _products(){
   return this.subject.asObservable();
  }
  getTTC():number{
  return this.products.reduce((acc:number,product:product)=>{
    return acc+product.pttc
  },0)  
  }
}


