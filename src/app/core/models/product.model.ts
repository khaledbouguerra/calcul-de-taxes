
import { Category } from '../interfaces/category';
import { productInterface } from '../interfaces/product'


export class product implements productInterface {
    name: string;
    quantity: number;
    category: Category;
    isImported: boolean;
    price: number;
    taxed: number
    //create the model for the product ! the model shoud be identified by a unique id but kept it with the nama as the identifier for simplivity
    constructor(product: productInterface) {
        this.name = product.name;
        this.quantity = product.quantity;
        this.category = product.category;
        this.isImported = product.isImported;
        this.price = product.price;
        this.taxed = this.pttc;
    }
//calculating the pttc for each product
    get pttc(): number {
        const importationTaxe = this.isImported ? 5 : 0 
        const pht=this.quantity*this.price;
        const Pttc =pht+(Math.round(pht*this.category.taxe+importationTaxe)/100)
        return Pttc
    }
}