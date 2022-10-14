import {Category} from '../interfaces/category'
import { productCategories } from '../enums/categories'
//setting the percentage of teh tax foreach categorie
export const categories:Category[]=[
    {name: productCategories[0], taxe:0},
    {name: productCategories[1], taxe:10},
    {name: productCategories[2], taxe:20},
]