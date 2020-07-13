import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, public prodService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      const txt = params['searchTxt'];
      this.prodService.searchItems(txt);
    });
  }

}
