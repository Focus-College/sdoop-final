export enum VehicleMake {
    FORD,
    CHEVROLET,
    SUBARU,
    NISSAN
}

export interface IVehicle {
    make: VehicleMake
    model: string
    year: number
    _age: number
}
