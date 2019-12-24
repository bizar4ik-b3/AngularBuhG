import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/system/shared/models/bill.model';
import {Response ,Http} from '@angular/http';
import { BaseApi } from 'src/app/shared/core/base-api';

@Injectable({
  providedIn: 'root'
})
export class BillService extends BaseApi{

  constructor(private httpclient: Http) {
    super(httpclient);
   }

  // getBill():Observable<Bill> {
  //   return this.httpclient.get(`http://localhost:3000/bill`)
  //     .map((responce: Response) => responce.json());
  // }

  getBill():Observable<Bill> {
   return this.get('/bill');
  }
  getCurrency(base:string="EUR"):Observable<any> {
    return this.httpclient.get(`http://data.fixer.io/api/latest?access_key=2fed2a6d6825a2cf3cd35b1fd83373e9&base=${base}`)
    .map((responce: Response) => responce.json());
  }
}
