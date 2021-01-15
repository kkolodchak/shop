import { ICategory } from './category.interface';

export interface IProduct {
    id: number;
    category: ICategory;
    nameEN: string;
    nameUA: string;
    description: string;
    season: string;
    brand: string;
    price: number;
    value: string;
    oldprice: number;
    selfcost: number;
    count: number;
    image: string;
}
