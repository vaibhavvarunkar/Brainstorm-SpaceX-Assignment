export interface APIStatus {
    pending: boolean;
    fullfilled: boolean;
    rejected: boolean;
  }

export const apiState: APIStatus = {
    pending: false,
    fullfilled: false,
    rejected: false
}

export interface ShipsLoaders {
    rocketsResponse: APIStatus
}

export interface ShipsInitialState{
    loaders:ShipsLoaders,
    data:any,
    error:string,
    popupData:any | ShipInfo
}

export interface ShipInfo{
    name:string
    image:string,
    id:string | number,
    abs:number,
    class:number,
    port:string,
    mmsi:number,
    year:number,
    missions:string[],
    type:string,
    weight:number
}

export interface ShipsSlice{
    popupData: any;
    loaders:ShipsLoaders,
    data:ShipInfo[],
    error:string
}

export interface ApiResponse{
    data:ShipInfo[]
    headers:any
}