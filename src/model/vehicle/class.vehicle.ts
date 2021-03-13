import { IVehicle, VehicleMake } from './interface.vehicle'
export class Vehicle implements IVehicle {
    
    make : VehicleMake
    model: string
    year : number
    _age : number


    get age(): number{

        return this._age     
    }

}

export class VehicleDirector{
    
}