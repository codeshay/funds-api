import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fund } from './fund/fund.model';

const url = "http://localhost:8082/api";

@Injectable({
  providedIn: 'root'
})

export class FundService {

  constructor(private http: HttpClient) { }

  getFunds(): Observable<any> {
    // return this.http.get(`"http://localhost:8082/api/funds"`);
    return this.http.get(`${url}/funds`);
  }

  getFund(id: number): Observable<any> {
    // return this.http.get("http://localhost:8082/api/funds/"+id);
    return this.http.get(`${url}/funds/${id}`);
  }

  deleteFund(id: any): Observable<any> {
    return this.http.delete(`${url}/funds/${id}`);
  }

  createFund(newFund: Fund): Observable<any> {
    return this.http.post(`${url}/funds/`, newFund);
  }

  updateFund(fund: Fund): Observable<any> {
    return this.http.patch(`${url}/funds/${fund.id}`, fund);
  }
}
