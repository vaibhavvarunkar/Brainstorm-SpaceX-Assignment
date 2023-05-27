import { MultiValue, SingleValue } from "react-select";

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
    TypeFilter:Option[]
    yearFilter:Option[]
    typeParam: string[]
    yearParam: string
    portParam:string
    portFilter:Option[]
}

export interface SliceTypes{
    ships:ShipsInitialState
}

export interface Option{
    label:string
    value:string | number
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

export interface FilterOptions{
    placeholder:string
    options:Option[]
    selected:MultiValue<Option> | SingleValue<Option>
    handleChange:(item:MultiValue<Option> | SingleValue<Option>) => void
    isMulti:boolean
}