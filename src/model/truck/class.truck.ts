import { Vehicle } from "../vehicle/class.vehicle";
import { VehicleMake } from "../vehicle/interface.vehicle";

export class Truck extends Vehicle {

    make: VehicleMake
    model: string
    year: number
    _age: number
    
}