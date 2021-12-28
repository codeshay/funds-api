import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FundService } from '../fund.service';
import { Fund } from './fund.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})

export class FundComponent implements OnInit {


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

  // workingFund = {name: ["", {editing: false}],
  //                 manager: ["", {editing: false}]
  //               }

  tempFundList = [["name", "", false],
                    ["manager", "", false],
                    ["birthdate", "", false],
                    ["balance", "", false],
                    ["interest", "", false],
                    ["term", "", false],
                    ["tax", "", false],
                    ["fees", "", false]
                  ]

  // tempFundList = [];
  //temporary is a universal word, doesnt come from database


  // @Input() fund: Fund = {
  //   id: 0,
  //   manager: "",
  //   name: "",
  //   birthdate: "",
  //   balance: 0,
  //   interest: 0,
  //   term: 0,
  //   tax: 0,
  //   fees: 0
  // }

  // @Input() message: string;

  constructor(private route:ActivatedRoute, 
              private fundService: FundService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const mutualId = +params['id'];
      // if(mutualId == NaN){
      //   this.router.navigateByUrl("/notfound")
      // }
      this.fundService.getFund(mutualId).subscribe(payload=>{
        this.fund = payload;
        ///////////////Edit in place/////////////////
        // for(const [key, value] of Object.entries(this.fund)){
        //   const localArray: [][] = [key, value, false];
        //   this.tempFundList.push(localArray);
        // }
      })
    })
  }

  goDeleteFund(): void {
    // this.fundService.deleteFund(id).subscribe(() => {
    //   this.fund = this.fund.filter(item => item.id !== id);
    // })
    this.fundService.deleteFund(this.fund.id).subscribe(); 
      this.router.navigateByUrl("/funds");
  }

  update():void {
    this.reconstituteFund();

    this.fundService.updateFund(this.fund).subscribe(data =>{
      if(data){
        this.router.navigateByUrl(`/funds/${this.fund.id}/edit`);
        // this.router.navigateByUrl("/funds");
      }
    })
    
  }

  reconstituteFund(): void {
    const reconsitutedFund: any = {};
    this.tempFundList.forEach(item =>{
      // reconsitutedFund[item[0]] = item[1];
    })
  }


  makeEditable(index: number): void {
    this.tempFundList[index][2] == true; 
  }

  makeStatic(index: number): void {
    this.tempFundList[index][2] == false;
  }

}
