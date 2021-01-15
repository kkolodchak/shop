import { IProduct } from './product.interface';
export interface IOrder{
    id: number;
    userName: string;
    userSecondName: string;
    userCity: string;
    userRegion: string;
    userPhone: string;
    userEmail: string;
    userComment: string;
    totalPayment: number;
    productOrder: Array<IProduct>;
    dateOreder: Date;
    statusOrder: string;
}
