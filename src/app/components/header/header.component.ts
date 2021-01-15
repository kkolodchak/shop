import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/interfaces/product.interface';
import { OrdersService } from '../../shared/services/orders.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalPrice = 0;
  private basket: Array<IProduct> = [];
  constructor(private ordersServivce: OrdersService) { }

  ngOnInit(): void {
    this.checkBasket();
    this.getLocalProducts();
  }

  private checkBasket(): void {
    this.ordersServivce.basket.subscribe(() => {
      this.getLocalProducts();
    });
  }

  private getLocalProducts(): void {
    if (localStorage.getItem('myOrder')){
      this.basket = JSON.parse(localStorage.getItem('myOrder'));
      this.totalPrice = this.basket.reduce((total, prod) => {
        return total + (prod.price * prod.count);
      }, 0);
    }
    else{
      this.totalPrice = 0;
    }
  }
}
