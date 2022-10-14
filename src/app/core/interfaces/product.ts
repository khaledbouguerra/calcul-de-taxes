import { Category } from "./category";
//each product must verify the following product interface
export interface productInterface {
    name: string;
    quantity:number;
    category: Category;
    isImported: boolean;
    price: number;
    taxed:number
}