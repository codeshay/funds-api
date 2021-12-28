import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FundService } from '../fund.service';
import { Fund } from '../fund/fund.model';


@Component({
  selector: 'app-editfund',
  templateUrl: './editfund.component.html',
  styleUrls: ['./editfund.component.scss']
})
export class EditfundComponent implements OnInit {

  fund:Fund = {
    // id: 0,
    // manager: "",
    // name: "",
    // birthdate: "",
    // balance: 0,
    // interest: 0,
    // term: 0,
    // tax: 0,
    // fees: 0
  };

  constructor(private route: ActivatedRoute,
              private fundService: FundService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const mutualId = +params['id'];
      this.fundService.getFund(mutualId).subscribe(payload=>{
        this.fund = payload;
      })
    })
  }

  update(): void {
    this.fundService.updateFund(this.fund).subscribe(data=>{
      if(data){
        this.router.navigateByUrl("/funds");
      }
    });
  }

}
