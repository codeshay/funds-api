import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundsComponent } from './funds/funds.component';
import { FundComponent } from './fund/fund.component';
import { HttpClientModule } from '@angular/common/http';
import { EditfundComponent } from './editfund/editfund.component';
import { FormsModule } from '@angular/forms';
import { CreatefundComponent } from './createfund/createfund.component';

@NgModule({
  declarations: [
    AppComponent,
    FundsComponent,
    FundComponent,
    EditfundComponent,
    CreatefundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
