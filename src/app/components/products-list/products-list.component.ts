import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private productService:ProductService) { }
producsList:any;
  ngOnInit(): void {
this.productService._products
.subscribe(data=>{
  this.producsList=data;
})
}
printOutPut(){
/*   let divContents = document.getElementById("toPrint")?.innerHTML||'';
let printWindow = window.open('', '', 'height=200,width=400');
printWindow?.document.write(divContents);
divContents=''; */
window.print();
}

}
