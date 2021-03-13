import { TruckBuilder } from '../truck/class.truck.builder'
import { CarBuilder }   from '../car/class.car.builder'
import { VehicleMake } from '../vehicle/interface.vehicle'


// enum FordModel {

//     FORD150XLT = "akeFordF150XLT",
//     FORDTAURUS = "FordTaurus",
//     FORDRANGER = "FordRanger",
//     FORDF150 = "FordF150"
// }

// make : VehicleMake
// model: string
// year : number
// _age : number
export class VehicleDirector {


    private builder: TruckBuilder | CarBuilder

    //, model:FordModel
    constructor( builder: typeof TruckBuilder | typeof CarBuilder ) {



        //     switch( model ){
        //         case FordModel.FORD150XLT:this.akeFordF150XLT(); break;
        //         case FordModel.FORDTAURUS:this.makeFordTaurus(); break;
        //         case FordModel.FORDRANGER:this.makeFordRanger(); break;
        //         case FordModel.FORDF150: this.makeFordF150(); break;


        // }
        
        
    }



    // is a truck
    // has tow package
    // has 4x4
    public akeFordF150XLT(): void {

        const builder = new TruckBuilder()
        builder.setModel("Ford F150 XLT")
        builder.addTowPackage()
        builder.add4x4()
    }

    // is a car
    public makeFordTaurus(): void {
        const builder = new CarBuilder()
        builder.setModel("Ford Taurus")
    }

    // is a truck
    // has 4x4
    public makeFordRanger(): void {
        const builder = new TruckBuilder()
        builder.setModel("Ford Ranger")
        builder.add4x4()
    }

    // is a truck
    // has tow package
    public makeFordF150(): void {
        const builder = new TruckBuilder()
        builder.setModel("Ford F150")
        builder.addTowPackage()        
    }


}