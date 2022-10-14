import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import {data} from '../../core/interfaces/data'


@Component({
  selector: 'app-facture-print',
  templateUrl: './facture-print.component.html',
  styleUrls: ['./facture-print.component.css']
})

export class FacturePrintComponent implements OnInit, OnDestroy {

  constructor(private productService: ProductService) { }
  public producsList: data | undefined;
  public taxes = 0;
  public tht = 0;
  subscription!: Subscription;
  ngOnInit(): void {
    //retreiving the data from products service
    this.subscription = this.productService._products
      .subscribe(data => {
        this.taxes = data.products.reduce((acc: number, product: product) => {
          return acc + product.taxed
        }, 0)
        //calculating the sum without taxes
        this.tht = data.products.reduce((acc: number, product: product) => {
          return acc + (product.price * product.quantity)
        }, 0)

        this.producsList = data;
      })
  }
  //unsubscribing from the obs to avoid data leaks and performance issues
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
