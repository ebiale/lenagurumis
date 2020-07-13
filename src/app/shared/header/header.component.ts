import { Component, OnInit } from '@angular/core';
import {InfoPagesService} from '../../services/info-pages.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public infoService: InfoPagesService, private router: Router) { }

  ngOnInit(): void {
  }

  searchItem(searchTxt: string): any {
    if (searchTxt.length < 1) { return; }

    this.router.navigate(['/search', searchTxt]);
  }
}
