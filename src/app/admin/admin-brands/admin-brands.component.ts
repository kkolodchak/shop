import { Component, OnInit } from '@angular/core';
import { IBrands } from '../../shared/interfaces/brands.interface';
import { BrandsService } from '../../shared/services/brands.service';
import { Brands } from '../../shared/models/brands.model';

@Component({
  selector: 'app-admin-brands',
  templateUrl: './admin-brands.component.html',
  styleUrls: ['./admin-brands.component.scss']
})
export class AdminBrandsComponent implements OnInit {
  adminBrands: Array<IBrands> = [];
  brandsID = 1;
  nameEN: string;
  nameUA: string;


  constructor(private brService: BrandsService) { }

  ngOnInit(): void {
    this.adminJSONBrand();
  }

  private adminJSONBrand(): void {
    this.brService.getJSONBrands().subscribe( data => {
      this.adminBrands = data;
    });
  }

  addBrands(): void{
    const newBr = new Brands(this.brandsID, this.nameEN, this.nameUA);
    delete newBr.id;
    this.brService.postJSONBrands(newBr).subscribe(() => {
      this.adminJSONBrand();
    });
    this.resetForm();
  }

  deleteBrands(brand: IBrands): void {
    this.brService.deleteJSONBrands(brand.id).subscribe(() => {
      this.adminJSONBrand();
    });
  }

  private resetForm(): void {
    this.nameEN = '';
    this.nameUA = '';
  }
}
