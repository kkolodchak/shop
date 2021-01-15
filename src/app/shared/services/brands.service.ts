import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBrands } from '../interfaces/brands.interface';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/brands';
  }

  getJSONBrands(): Observable<Array<IBrands>>{
    return this.http.get<Array<IBrands>>(this.url);
  }

  postJSONBrands(brands: IBrands): Observable<IBrands> {
    return this.http.post<IBrands>(this.url, brands);
  }

  deleteJSONBrands(id: number): Observable<IBrands> {
    return this.http.delete<IBrands>(`${this.url}/${id}`);
  }
}
