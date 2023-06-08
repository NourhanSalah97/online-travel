import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

  }

  getData(){
    return this.http.get('./assets/response.json').pipe(
      map((response:any) => response.airItineraries)
    );
  }
}
