import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  loading = true;

  constructor(private http: HttpClient) {
    this.loadProd();
  }

  private loadProd(): any {
    return new Promise( (resolve, reject) => {
      this.http.get('https://lenagurumis.firebaseio.com/products_idx.json').subscribe( (items: Product[] ) => {
        this.loading = false;
        this.products = items;
        resolve();
      });
    });

  }

  getItem(id: string): any {
    return this.http.get(`https://lenagurumis.firebaseio.com/products/${id}.json`);
  }

  searchItems(searchTxt: string): any {
    if (this.products.length === 0) {
      this.loadProd().then(() => {
        this.applyFilter(searchTxt);
      });
    } else {
      this.applyFilter(searchTxt);
    }
  }

  private applyFilter(searchTxt: string): any {
    this.filteredProducts = [];
    this.products.forEach(item => {
      if (item.title.toLowerCase().indexOf(searchTxt.toLowerCase()) > -1) {
        this.filteredProducts.push(item);
      } else {
        item.category.forEach(cat => {
          if (cat.toLowerCase().indexOf(searchTxt.toLowerCase()) > -1) {
            this.filteredProducts.push(item);
          }
        });
      }
    });
  }
}
