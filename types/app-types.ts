export type TripType = 'one-way' | 'return';

type TripDates = {
    departure: string,
    return?: string
};

export type TripDetails = {
    departure: string,
    arrival: string,
    type: TripType,
    dates: TripDates
};

