import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { product } from '../core/models/product.model';
import { productInterface } from '../core/interfaces/product';

interface data {
  products: product[];
  ttc: number
}

@Injectable({
  providedIn: 'root'
})



export class ProductService {
  products: product[] = [];
  private subject = new Subject<data>()


// send data to the subscribed components
  sendData() {
    this.subject.next({ products: this.products, ttc: this.getTTC() });
  }
  //add an artcile
  addProduct($product: productInterface) {
    const newProduct = new product($product)
    this.products.push(newProduct);
    this.sendData()
  }
  get _products() {
    return this.subject.asObservable();
  }
  // shout be delete by id but used the name for simplicity
  deleteProduct(productToDelete: product) {
    this.products = this.products.filter(product => { return product.name != productToDelete.name; });
    this.sendData()
  }
  //calculate the ttc for all the products
  getTTC(): number {
    const ttc = Math.ceil(this.products.reduce((acc: number, product: product) => {
      return acc + product.pttc
    }, 0))  
    return ttc
  }
}


