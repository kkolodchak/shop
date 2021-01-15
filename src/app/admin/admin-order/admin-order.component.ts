import { Component, OnInit, TemplateRef } from '@angular/core';
import { IOrder } from 'src/app/shared/interfaces/order.interface';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OrdersService } from '../../shared/services/orders.service';
// import { ProductService } from 'src/app/shared/services/product.service';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss']
})
export class AdminOrderComponent implements OnInit {
  adminOrders: Array<IOrder> = [];
  modalRef: BsModalRef;
  constructor(
    // private prodService: ProductService,
    private ordersService: OrdersService,
    private modalService: BsModalService,
    // private actRoute: ActivatedRoute
                                       ) { }
  ngOnInit(): void {
    this.getOrders();
    // this.getViewProduct();
  }

  // private getViewProduct(): void {
  //   const id = +this.actRoute.snapshot.paramMap.get('id');
  //   this.prodService.getOneProduct(id);
  // }

  private getOrders(): void {
    this.ordersService.getOrder().subscribe(
      data => {
        this.adminOrders = data;
      }
    );
  }

  openDetailsModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-dialog-centered' });
  }
}
