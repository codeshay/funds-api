import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FundService } from '../fund.service';
import { Fund } from '../fund/fund.model';

@Component({
  selector: 'app-createfund',
  templateUrl: './createfund.component.html',
  styleUrls: ['./createfund.component.scss']
})
export class CreatefundComponent implements OnInit {

  newFund: Fund = {
    id: 0,
    manager: "",
    name: "",
    birthdate: "",
    balance: 0,
    interest: 0,
    term: 0,
    tax: 0,
    fees: 0
  };

  constructor(private route:ActivatedRoute, 
              private fundService: FundService,
              private router: Router
    ) { }


  ngOnInit(): void {
  }

  goCreateFund() {
    console.log("Here is my new fund", this.newFund);
    this.fundService.createFund(this.newFund).subscribe(data =>{
      // this.newFund = data;

      if(data){
        this.router.navigateByUrl("/funds");
      }
    })
  }

}
