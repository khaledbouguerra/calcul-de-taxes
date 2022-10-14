import { Category } from "./category";

export interface productInterface {
    name: string;
    quantity:number;
    category: Category;
    isImported: boolean;
    price: number;
}