import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/interfaces/product.interface';
import { OrdersService } from '../../shared/services/orders.service';
import { NgForm } from '@angular/forms';
import { Order } from '../../shared/models/order.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  orders: Array<IProduct> = [];
  orderID = 1;
  userName: string;
  userSecondName: string;
  userCity: string;
  userRegion: string;
  userPhone: string;
  userEmail: string;
  userComment: string = '';
  totalPrice = 0;
  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.getBasket();
  }

  private getBasket(): void {
    if (localStorage.getItem('myOrder')) {
      this.orders = JSON.parse(localStorage.getItem('myOrder'));
      this.getTotal();
    }
  }

  private getTotal(): void {
    this.totalPrice = this.orders.reduce((total, prod) => total + (prod.price * prod.count), 0);
  }

  private updateBasket(): void{
    localStorage.setItem('myOrder', JSON.stringify(this.orders));
    this.getTotal();
    this.ordersService.basket.next('ddd');
  }

  detectChangeCount(status: boolean): void {
    if (status) {
      this.updateBasket();
    }
  }

  deleteProduct(product: IProduct): void {
    if(confirm('Ты уверен что хочешь удалить товар?')){
      const index = this.orders.findIndex(prod => prod.id === product.id);
      this.orders.splice(index, 1);
      this.updateBasket();
    }
  }

  addOrder(): void{
    const order = new Order(this.orderID,
                            this.userName,
                            this.userSecondName,
                            this.userCity,
                            this.userRegion,
                            this.userPhone,
                            this.userEmail,
                            this.userComment,
                            this.totalPrice,
                            this.orders,
                            new Date());
    delete order.id;
    this.ordersService.addOrder(order).subscribe(
      () => {
        this.resetOrder();
      }
    );
  }

  resetOrder(): void{
    localStorage.removeItem('myOrder');
    this.orders = [];
    this.ordersService.basket.next('Оформили заказ');
  }

}
