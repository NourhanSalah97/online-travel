import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import { IFlight, IFlightDTO, IairItineraries } from './IFlight';
@Injectable({
  providedIn: 'root'
})
export class DataService {
originalData$=this.http.get('./assets/response.json').pipe(
  map((response:any) => response.airItineraries)
);
  private filteredDataSubject = new BehaviorSubject<any>([]);
  filteredData$ = this.filteredDataSubject.asObservable();
  constructor(private http: HttpClient) {
    this.initializeData()
  }

  getData(){
    return this.http.get('./assets/response.json').pipe(
      map((response:any) => response.airItineraries)
    );
  }
  getAirlines(){
    return this.http.get('./assets/response.json').pipe(
      map((response:any) => response.airlines)
    );
  }
  
  initializeData() {
    this.getData().subscribe((data: any) => {
      this.filteredDataSubject.next(data);
    });
  } 
   
 
  updateFilteredData(data:any ) {
    this.filteredDataSubject.next(data);
  }
}
