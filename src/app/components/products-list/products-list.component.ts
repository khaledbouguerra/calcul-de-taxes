import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import {data} from '../../core/interfaces/data'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  constructor(private productService: ProductService) { }
  producsList:  data | undefined;
  subscription!: Subscription;
  ngOnInit(): void {
    this.subscription = this.productService._products.subscribe(data => {
      this.producsList = data;
      console.log(' this.producsList', this.producsList);
    })
  }
  printOutPut() {
    window.print();
  }

  deleteProduct(product: product) {
    this.productService.deleteProduct(product)
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
