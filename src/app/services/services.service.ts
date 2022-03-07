import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

declare var require: any;

@Injectable({
  providedIn: 'root'
})
export class DataService {  
  md5 = require('md5');
  ts = Number(new Date());
  hash = this.md5(this.ts + environment.privateKey + environment.publicKey);   

  getCharacters = async (payload?:any) => {
    const type = typeof payload;
    let _urlPrefix = '';

    if(payload) {
      switch(type) {
        case 'number':
          _urlPrefix = `${environment.apiBaseUrl}/v1/public/characters/${payload}?`;
          break;
        case 'string':
          _urlPrefix = `${environment.apiBaseUrl}/v1/public/characters?nameStartsWith=${payload.toLowerCase()}&`;
          break;
        default:
          _urlPrefix = `${environment.apiBaseUrl}/v1/public/characters?`;
          break;
      }
    } else {
      _urlPrefix = `${environment.apiBaseUrl}/v1/public/characters?`;
    }

    const response = await fetch(_urlPrefix + `ts=${this.ts}&apikey=${environment.publicKey}&hash=${this.hash}&limit=100&offset=0`).then(res => {
        return res.json()
    }).catch(err => console.log(err))    

    return response;
  }  
}
