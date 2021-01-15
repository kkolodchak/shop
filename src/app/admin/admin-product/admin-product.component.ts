import { Component, OnInit, TemplateRef } from '@angular/core';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
// import { IBrands } from 'src/app/shared/interfaces/brands.interface';
import { Product } from 'src/app/shared/models/product.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductService } from 'src/app/shared/services/product.service';
// import { BrandsService } from '../../shared/services/brands.service';

import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, config } from 'rxjs';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// import { IBrands } from '../../shared/interfaces/brands.interface';
// import { IProduct } from '../../shared/interfaces/product.interface';



@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {
  categories: Array<ICategory> = [];
  categoryName: string;
  adminProducts: Array<IProduct> = [];
  productID = 1;
  productCategory: ICategory = { id: 1, nameEN: 'female', nameUA: 'женщины' };
  productNameEN: string;
  productNameUA: string;
  productDescription: string;
  productSeason: string;
  productBrands: string;
  productPrice: number;
  productValue: string;
  productOldprice: number;
  productSelfcost: number;
  productImage: string;

  imageStatus: boolean;
  uploadProgress: Observable<number>;

  modalRef: BsModalRef;
  editStatus: boolean;

  constructor(private catService: CategoryService,
    private prodService: ProductService,
    private afStorage: AngularFireStorage,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.adminJSONCategories();
    this.getProducts();
  }

  private adminJSONCategories(): void {
    this.catService.getJSONCategory().subscribe(data => {
      this.categories = data;
    });
  }

  private getProducts(): void {
    this.prodService.getJSONProduct().subscribe(data => {
      this.adminProducts = data;
    });
  }

  setCategory(): void {
    this.productCategory = this.categories.filter(cat => cat.nameEN === this.categoryName)[0];
  }

  addProduct(): void {
    const newProd = new Product(this.productID,
      this.productCategory,
      this.productNameEN,
      this.productNameUA,
      this.productDescription,
      this.productSeason,
      this.productBrands,
      this.productPrice,
      this.productValue,
      this.productOldprice,
      this.productSelfcost,
      this.productImage);
    if (!this.editStatus) {
      delete newProd.id;
      this.prodService.postJSONProduct(newProd).subscribe(() => {
        this.getProducts();
      });
    }
    else {
      this.prodService.updateJSONProduct(newProd).subscribe(() => {
        this.getProducts();
      });
      this.editStatus = false;
    }
    this.resetForm();
  }

  uploadFile(event): void {
    const file = event.target.files[0];
    const type = file.type.slice(file.type.indexOf('/') + 1);
    const name = file.name.slice(0, file.name.lastIndexOf('.')).toLowerCase();
    const filePath = `images/${name}.${type}`;
    const upload = this.afStorage.upload(filePath, file);
    this.uploadProgress = upload.percentageChanges();
    upload.then(image => {
      this.afStorage.ref(`images/${image.metadata.name}`).getDownloadURL().subscribe(url => {
        this.productImage = url;
        this.imageStatus = true;
      });
    });
  }

  deleteImage(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  confirmImage(): void {
    this.afStorage.storage.refFromURL(this.productImage).delete();
    this.modalRef.hide();
    this.imageStatus = false;
  }

  declineImage(): void {
    this.modalRef.hide();
  }

  private resetForm(): void {
    this.productCategory = this.categories[0];
    this.productNameEN = '';
    this.productNameUA = '';
    this.productDescription = '';
    this.productSeason = '';
    this.productBrands = '';
    this.productPrice = null;
    this.productValue = '';
    this.productOldprice = null;
    this.productSelfcost = null;
    this.productImage = '';
    this.imageStatus = false;
  }

  editProduct(product: IProduct): void {
    this.productID = product.id;
    this.productCategory = this.categories.filter(cat => cat.nameEN === product.category.nameEN)[0];
    this.categoryName = this.productCategory.nameEN;
    this.productNameEN = product.nameEN;
    this.productNameUA = product.nameUA;
    this.productDescription = product.description;
    this.productSeason = product.season;
    this.productBrands = product.brand;
    this.productPrice = product.price;
    this.productValue = product.value;
    this.productOldprice = product.oldprice;
    this.productSelfcost = product.selfcost;
    this.productImage = product.image;
    this.imageStatus = true;
    this.editStatus = true;
  }

  deleteProduct(product: IProduct): void {
   if (confirm('Ты уверен что хочешь удалить товар?')){
      this.prodService.deleteJSONProduct(product.id).subscribe(() => {
      this.getProducts();
    });
    this.afStorage.storage.refFromURL(product.image).delete();
   }
  }

}
