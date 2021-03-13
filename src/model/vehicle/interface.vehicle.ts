export enum VehicleMake {
    FORD,
    CHEVROLET,
    SUBARU,
    NISSAN,
    FORD150XLT = "akeFordF150XLT",
    FORDTAURUS = "FordTaurus",
    FORDRANGER = "FordRanger",
    FORDF150 = "FordF150"
}

export interface IVehicle {
    make: VehicleMake
    model: string
    year: number
    _age: number
}
