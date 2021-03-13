import { VehicleMake } from '../vehicle/interface.vehicle'
import { Car } from './class.car'

export class CarBuilder {

    private car: Car

    public setMake( make: VehicleMake ): void {
        this.car.make = make;

    }

    public setModel( model: string ): void {
        this.car.model = model;

    }

    public getCar(): Car {

        return this.car
    }





}