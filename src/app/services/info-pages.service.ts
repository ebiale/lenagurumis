import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfoPage} from '../interfaces/info-pages.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPagesService {

  info: InfoPage = {};
  loaded = false;

  constructor(private httpClient: HttpClient) {
    this.loadInfo();
  }

  private loadInfo(): any {
    this.httpClient.get('https://lenagurumis.firebaseio.com/info.json')
      .subscribe( (resp: InfoPage) => {
        this.loaded = true;
        this.info = resp;
      });
  }
}
