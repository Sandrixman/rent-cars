export interface Car {
    _id: number;
    img: string;
    make: string;
    model: string;
    year: string;
    rentalPrice: string;
    rentalCompany: string;
    type: string;
    address: string;
    description: string,
    accessories: string[],
    functionalities: string[],
    rentalConditions: string,
    mileage: number,
    fuelConsumption: string,
    engineSize: string,
}
export interface IFilterSelected {
    car: number | string | undefined;
    price: number | string | undefined;
    minMileage: string;
    maxMileage: string;
}
export interface ISelectDropdown {
    value: number | string | undefined;
    label: number | string | undefined;
}
