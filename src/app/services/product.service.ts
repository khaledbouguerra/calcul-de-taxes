import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import  {product} from '../core/models/product.model'

@Injectable({
  providedIn: 'root'
})

export class ProductService {
products:any=[];
private subject = new Subject<any>();


  constructor() { }
  sendMessage() {
    this.subject.next({products:this.products ,ttc:this.getTTC()});
}
  addProduct($product:any){
    console.log('$product',$product)
   let newProduct=new product($product)
   this.products.push(newProduct);
   this.sendMessage()
  }
  get Products(){
   return this.subject.asObservable();
  }
  getTTC():number{
  return this.products.reduce((acc:number,product:product)=>{
    return acc+product.pttc
  },0)  
  }
}


