import { IBrands } from '../interfaces/brands.interface';

export class Brands implements IBrands {
    constructor(public id: number,
                public nameEN: string,
                public nameUA: string) { }
}
