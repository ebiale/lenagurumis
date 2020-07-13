import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../services/products.service';
import {Item} from '../../interfaces/item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item: Item;
  imgPath: string;

  constructor(private route: ActivatedRoute, private prodService: ProductsService) {}

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.prodService.getItem(params['id']).subscribe( (item: Item) => {
        this.item = item;
        this.imgPath = `/assets/img/${params['id']}`;
      });
    });
  }

}
