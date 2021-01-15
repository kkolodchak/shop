import { IProduct } from '../interfaces/product.interface';
import { ICategory } from '../interfaces/category.interface';

export class Product implements IProduct {
    constructor(public id: number,
                public category: ICategory,
                public nameEN: string,
                public nameUA: string,
                public description: string,
                public season: string,
                public brand: string,
                public price: number,
                public value: string,
                public oldprice: number,
                public selfcost: number,
                public image: string,
                public count: number = 1){}
}
