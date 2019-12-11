import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';
import { BillPageComponent } from './bill-page/bill-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';

const routes: Routes = [
  {
    path: "system", component: SystemComponent, children: [
      { path: "bill", component: BillPageComponent },
      { path: "history", component: HistoryPageComponent },
      { path: "records", component: RecordsPageComponent },
      { path: "planning", component: PlanningPageComponent },
    ]

  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class SystemRoutingModule { }
