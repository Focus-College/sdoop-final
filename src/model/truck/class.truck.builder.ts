import { Truck } from "../truck/class.truck";
import { VehicleMake } from "../vehicle/interface.vehicle";
import { with4by4 } from "./mixin.with4by4";
import { withTowPackage } from './mixin.withTowePackage';

export class TruckBuilder {

    private truck:Truck
    BaseTruck = Truck;


    public setMake( make: VehicleMake ): void {

            switch( make ){
                case VehicleMake.FORD150XLT:this.BaseTruck; break;
                case VehicleMake.FORDTAURUS:this.BaseTruck; break;
                case VehicleMake.FORDRANGER:this.BaseTruck; break;
                case VehicleMake.FORDF150: this.BaseTruck; break;
            }
      
        
    }

    public setModel( model: string ): void{
        this.truck.model = model;

    }

    public addTowPackage(): void{

        this.BaseTruck = withTowPackage(this.BaseTruck)      
    
    }

    public add4x4(): void {
        this.BaseTruck = with4by4(this.BaseTruck)

    }

    public getTruck(): Truck {

        return this.truck
    }







    
}