import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillService } from '../shared/services/bill.service';
import { combineLatest, Subscription, Observable  } from 'rxjs';
import { Bill } from '../shared/models/bill.model';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'wfm-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {


  constructor(private billService:BillService) { }
  subscription1: Subscription;
  subscription2: Subscription;
  currency: any;
  bill: Bill;
  isLoaded = false;

  ngOnInit() {
   this.subscription1= combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe((data:[Bill,any]) => {
      this.bill = data[0];
      this.currency = data[1];
      this.isLoaded = true;
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

  onRefresh() {
  this.isLoaded = false;
  this.subscription2 = this.billService.getCurrency().delay(2000)
    .subscribe((currency: any) => {
      this.currency = currency;
      this.isLoaded = true;
    });
  }

}
