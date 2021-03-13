import {VehicleDirector} from './model/vehicle/class.vehicule.director'
import {TruckBuilder} from './model/truck/class.truck.builder'
import {CarBuilder} from './model/car/class.car.builder'


const truckBuilder = new TruckBuilder();
truckBuilder.setModel("Ford")
const carBuilder = new CarBuilder();

const truckvehicleDirector = new VehicleDirector (TruckBuilder)
const carvehicleDirector = new VehicleDirector (CarBuilder)

//     FORD150XLT = "akeFordF150XLT",
//     FORDTAURUS = "FordTaurus",
//     FORDRANGER = "FordRanger",
//     FORDF150 = "FordF150"

const FORD150XLT = truckvehicleDirector.akeFordF150XLT();
const FORDTAURUS = carvehicleDirector.makeFordTaurus();
const FORDRANGER = truckvehicleDirector.makeFordRanger();
const FORDF150   = truckvehicleDirector.makeFordF150();

