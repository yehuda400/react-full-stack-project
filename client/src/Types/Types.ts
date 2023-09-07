export interface AllTripDetailsInterface {
    id: string;
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    description: string;
    price: number;
    image: string;
    activities: string[];
}

export interface UserInterface {
    email: string;
    password: string;
}

export interface PartTripDetailsInterface {
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    image: string;
}
