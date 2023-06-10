import { Component, OnInit } from '@angular/core';
import { IFlight, IFlightDTO, IairItineraries } from 'src/app/shared/IFlight';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  panelOpenState = true;
  airLines!: any;
  sliderStartValue!: number;
  sliderEndValue!: number;
  directChecked!: boolean;
  withStopChecked!: boolean;
  flightData!: IairItineraries[];
  flightDetails!: IFlightDTO[];
  filteredData!: any[];
  generalData!: IairItineraries[];
  airlineNames!: string;
  formatLabel(value: number): string {
    if (value >= 100 && value <= 1000) {
      return value + 'KWD';
    }

    return `${value}`;
  }
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.getAirlines().subscribe((data) => {
      this.airLines = data;
    });
    this.dataService.getData().subscribe((data) => {
      this.flightData = data.forEach((eachFlight: any) => {
        eachFlight.allJourney.flights.forEach((DTO: any) => {
          this.flightDetails = DTO.flightDTO;
        });
      });
    });
    this.dataService.getData().subscribe((data) => (this.generalData = data));
  }

  filterPrice() {
    // Filter the data based on the slider range values
    this.filteredData = this.generalData.filter(
      (item) =>
        item.itinTotalFare.amount <= this.sliderEndValue &&
        item.itinTotalFare.amount >= this.sliderStartValue
    );

    this.dataService.updateFilteredData(this.filteredData);
  }
  filterStops() {
    this.filteredData = this.generalData?.filter((item) => {
      if (this.directChecked && !this.withStopChecked) {
        return item.allJourney.flights.map((DTO: any) =>
          DTO.flightDTO.filter((elem: any) => 
             (elem.isStopSegment==true)
          )
        );
      } else if (!this.directChecked && this.withStopChecked) {
        return item.allJourney.flights.map((DTO: any) =>
          DTO.flightDTO.filter((elem: any) => {
           elem.isStopSegment==false;
          })
        );
      } else if (this.directChecked && this.withStopChecked) {
        return true;
      } else {
        return true; // No checkboxes selected, return all items
      }
    });
    this.dataService.updateFilteredData(this.filteredData);
  }
  // filterAirLine(){
  //   this.filteredData=this.
  //   generalData?.filter(item=>{
  //     return this.airlineNames.length === 0 || this.airlineNames.includes(item.baggageInformation.airlineName);

  //   })
  //   this.dataService.updateFilteredData(this.filteredData);

  // }
}
