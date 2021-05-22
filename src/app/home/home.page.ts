import { Component } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currencyInputValue: any;
  result: any;

  constructor(private currencyService: CurrencyService) {}

  calc() {
    this.currencyService.getCurrency('chf').subscribe((value: any) => this.result = value.rates[0].mid);
  }
}
