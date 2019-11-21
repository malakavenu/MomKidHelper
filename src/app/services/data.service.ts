import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiURL  = 'https://api.myjson.com/bins/t3g7d';

  constructor(private http: HttpClient) { }
  getAllData(num) {
    return this.http.get(`./assets/data/${num}/${num}.json`);
  }
  updateData(data){
    return this.http.put(`${this.apiURL}`, data);
}
}
