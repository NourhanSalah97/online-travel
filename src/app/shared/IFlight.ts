export interface IairItineraries{
    sequenceNum:number;
    pKey:string;
    itinTotalFare:{
        amount:number;
        currencyCode:string;
    };
    allJourney:{
        flights:IFlight[]
    }
    baggageInformation:{
        airlineName:string,
    }
}

export interface IFlight{
flightDTO:IFlightDTO[]
}

export interface IFlightDTO{
    arrivalDate:Date;
    arrivalOffset:number;
    arrivalTerminalAirport:{
        airportCode:string;
        airportName:string;
        cityName:string;

    };

    departureDate:Date;
    departureTerminalAirport:{
        airportCode:string;
        airportName:string;
        cityName:string;
    }
    flightAirline:{
        airlineCode:string;
        airlineLogo:string;
        airlineName:string;
    },
    isStopSegment:boolean;
    durationPerLeg:number;



}