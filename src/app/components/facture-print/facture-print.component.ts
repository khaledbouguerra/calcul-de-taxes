import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-facture-print',
  templateUrl: './facture-print.component.html',
  styleUrls: ['./facture-print.component.css']
})
export class FacturePrintComponent implements OnInit {
  @Input() products:any=[]
  constructor(private productService:ProductService) { }
  producsList:any
  taxes:number=0;
  tht:number=0;
    ngOnInit(): void {
    this.productService.Products
    .subscribe(data=>{
      this.taxes=   data.products.reduce((acc:number,product:product)=>{
        return acc+ product.taxed
      },0) 

      this.tht=   data.products.reduce((acc:number,product:product)=>{
        return acc+ (product.price* product.quantity)
      },0) 
      
      this.producsList=data;
    })
  }

}
