import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillService } from '../shared/services/bill.service';
import { combineLatest, Subscription  } from 'rxjs';
import { Bill } from '../shared/models/bill.model';

@Component({
  selector: 'wfm-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {


  constructor(private billService:BillService) { }
  subscription: Subscription;
  ngOnInit() {
   this.subscription= combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe((data:[Bill,any]) => {
      console.log(data);
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
