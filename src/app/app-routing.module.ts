import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundsComponent } from './funds/funds.component';
import { FundComponent } from './fund/fund.component';
import { EditfundComponent } from './editfund/editfund.component';
import { CreatefundComponent } from './createfund/createfund.component';

const routes: Routes = [
  {path: "funds", component: FundsComponent},
  {path: "createfund", component: CreatefundComponent},
  {path: "funds/:id", component: FundComponent},
  {path: "funds/:id/edit", component: EditfundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
