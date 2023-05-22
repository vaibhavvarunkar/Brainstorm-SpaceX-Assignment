import { ShipInfo, ShipsInitialState, ShipsLoaders, apiState } from "../../models"

const data: ShipInfo[] = []

const loaders: ShipsLoaders = {
    rocketsResponse: apiState
}

const popupData:any | ShipInfo = {}
const error: string = ""
export const initialState: ShipsInitialState = {
    data,
    loaders,
    error,
    popupData
}