import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getCurrency(currency: string) {
    return this.http.get(`http://api.nbp.pl/api/exchangerates/rates/a/${currency}/?format=json`);
  }
}
