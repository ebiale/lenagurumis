import { Component, OnInit } from '@angular/core';
import {InfoPagesService} from '../../services/info-pages.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year: number;
  constructor(public infoService: InfoPagesService) { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

}
