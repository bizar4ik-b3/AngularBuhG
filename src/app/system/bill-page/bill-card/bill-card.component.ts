import { Component, OnInit, Input } from '@angular/core';
import { Bill } from '../../shared/models/bill.model';


@Component({
  selector: 'wfm-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  constructor() { }
  @Input() bill: Bill;
  @Input() currency: any;

  dollar: number;
  euro: number;

  ngOnInit() {
    const {rates } = this.currency;
    console.log(this.currency);
    // tslint:disable-next-line: no-string-literal
    this.dollar = rates["USD"]*this.bill.value;
    // tslint:disable-next-line: no-string-literal
    this.euro = rates['UAH']*this.bill.value;
  }

}
