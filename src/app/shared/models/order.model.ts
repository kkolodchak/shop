import { IOrder } from '../interfaces/order.interface';
import { IProduct } from '../interfaces/product.interface';
export class Order implements IOrder{
    constructor(
        public id: number,
        public userName: string,
        public userSecondName: string,
        public userCity: string,
        public userRegion: string,
        public userPhone: string,
        public userEmail: string,
        public userComment: string,
        public totalPayment: number,
        public productOrder: Array<IProduct>,
        public dateOreder: Date,
        public statusOrder: string = 'в обробці',
    ){}
}
