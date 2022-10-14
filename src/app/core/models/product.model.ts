
import { Category } from '../interfaces/category';
import {productInterface} from '../interfaces/product'


export class product implements productInterface{
     name:string;
     quantity:number;
     category:Category;
     isImported:boolean;
     price:number;
     taxed:number
    constructor( product:productInterface){
        this.name = product.name;
        this.quantity=product.quantity;
        this.category=product.category;
        this.isImported =product.isImported;
        this.price =product.price;
        this.taxed=this.pttc;
    }

    get pttc():number{

        const calculatedTax=(this.price*this.category.taxe);
        const imputedTaxe= Math.ceil(calculatedTax/0.05)*0.05
        const importationTaxe=this.isImported?(this.price)*0.05:0
        const imputedImportationTaxe=Math.ceil(importationTaxe/0.05)*0.05 
    return this.quantity*(imputedImportationTaxe+this.price+imputedTaxe)
    }
}