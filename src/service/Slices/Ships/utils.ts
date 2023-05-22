import { image_sample } from "../../../constants/constants";
import { ShipInfo } from "../../models";

export const validateData = (payload:any):ShipInfo[] => {
    const validatedData = payload.map((data:any) => ({
        name:data.ship_name === null ? "Not avaialable" : data.ship_name,
        id:data.ship_id === null ? "Not avaialable" : data.ship_id,
        type:data.ship_type === null ? "Not avaialable" : data.ship_type,
        abs:data.abs === null ? "Not avaialable" : data.abs,
        class:data.class === null ? "Not avaialable" : data.class,
        port:data.home_port === null ? "Not avaialable" : data.home_port,
        mmsi:data.mmsi === null ? "Not avaialable" : data.mmsi,
        image:data.image === null ? image_sample : data.image,
        missions:data.missions === null ? "Not avaialable" : data.missions,
        year:data.year_built=== null ? "Not avaialable" : data.year_built,
        weight:data.weight_kg === null ? "Not avaialable" : data.weight_kg
    }))
    return validatedData
}