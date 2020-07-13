import { Component, OnInit } from '@angular/core';
import {InfoPagesService} from '../../services/info-pages.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public infoService: InfoPagesService) { }

  ngOnInit(): void {
  }

}
