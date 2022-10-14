import {Category} from '../interfaces/category'
import { productCategories } from '../enums/categories'
export const categories:Category[]=[
    {name: productCategories[0], taxe:0},
    {name: productCategories[1], taxe:0.1},
    {name: productCategories[2], taxe:0.2},
]