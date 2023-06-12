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
  selectedAirlines: string[] = [];
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
        return item.allJourney.flights[0].flightDTO[0].isStopSegment===false 
      } else if (!this.directChecked && this.withStopChecked) {
        return item.allJourney.flights[0].flightDTO[0].isStopSegment===true;
      } else if (this.directChecked && this.withStopChecked) {
        return true;
      } else {
        return true; // No checkboxes selected, return all items
      }
    });
    this.dataService.updateFilteredData(this.filteredData);
  }
  toggleAirline(airline:string){
    const index = this.selectedAirlines.indexOf(airline);

    if (index >= 0) {
      this.selectedAirlines.splice(index, 1);
    } else {
      this.selectedAirlines.push(airline);
    }
    this.filterAirLine();
  }
  filterAirLine(){
    if (this.selectedAirlines.length===0){
      this.filteredData=this.generalData;
    }else{
    this.filteredData = this.generalData.filter((item) => {
      const flightDTO = item.allJourney.flights[0].flightDTO;
      const hasSelectedAirlines = flightDTO.some((flight) =>
        this.selectedAirlines.includes(flight.flightAirline.airlineName)
      );
      return hasSelectedAirlines;
    
    }); 
       }
     this.dataService.updateFilteredData(this.filteredData);
}
}

 
