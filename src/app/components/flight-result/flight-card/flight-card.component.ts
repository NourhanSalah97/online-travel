import { Component, OnInit } from '@angular/core';
import { IairItineraries } from 'src/app/shared/IFlight';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {
  //defining properties
  flightData!: IairItineraries[];
  filteredData!: any[];

constructor(private dataService:DataService){

}
  ngOnInit(){
    //retriving data from service 
    this.dataService.getData().subscribe(data => {
      this.flightData=data;
  

      
      
    });
    this.dataService.filteredData$.subscribe(data => {
      this.filteredData = data;
    });
  }
}

