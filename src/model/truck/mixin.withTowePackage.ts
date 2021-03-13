import { Constructor } from './mixin.truck.constructor'


export function withTowPackage <Parent extends Constructor>( MixOn:Parent ){

    return class extends MixOn {

        towLimit: number = 2
    }
    

}