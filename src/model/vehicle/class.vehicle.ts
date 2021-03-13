import { IVehicle, VehicleMake } from './interface.vehicle'
export class Vehicle implements IVehicle {
    
    public make : VehicleMake
    public model: string
    public year : number
    public _age : number

    constructor(){

    }


    public get age(): number{

        return this._age     
    }

}