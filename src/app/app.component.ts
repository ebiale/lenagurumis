import { Component } from '@angular/core';
import {InfoPagesService} from './services/info-pages.service';
import {ProductsService} from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public infoPagesService: InfoPagesService, public productsService: ProductsService) {}
}
