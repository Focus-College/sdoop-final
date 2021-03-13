import { Constructor } from './mixin.truck.constructor'


export function with4by4 <Parent extends Constructor>( MixOn:Parent ){

    return class extends MixOn {

        is4x4: boolean
        isIn4x4: boolean = false

        toggle4x4(): void {
            this.isIn4x4 = !this.isIn4x4
        }

    }
    

}