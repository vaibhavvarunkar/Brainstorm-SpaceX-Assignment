import { SingleValue } from "react-select"
import { Option, ShipInfo, ShipsInitialState, ShipsLoaders, apiState } from "../../models"

const data: ShipInfo[] = []

const loaders: ShipsLoaders = {
    rocketsResponse: apiState
}

const TypeFilter:Option[] = []
const yearFilter:Option[] = []
const portFilter:Option[] = []
const popupData:any | ShipInfo = {}
const error: string = ""
const typeParam:string[] = []
const yearParam: string = ""
const portParam: string = ""
export const initialState: ShipsInitialState = {
    data,
    loaders,
    error,
    popupData,
    TypeFilter,
    yearFilter,
    typeParam,
    yearParam,
    portParam,
    portFilter
}