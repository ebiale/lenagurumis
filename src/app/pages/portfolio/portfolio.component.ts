import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(public prodService: ProductsService) { }

  ngOnInit(): void {
  }

}
