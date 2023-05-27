import { image_sample } from "../../../constants/constants";
import { Option, ShipInfo } from "../../models";

export const validateData = (payload: any): ShipInfo[] => {
    const validatedData = payload.map((data: any) => ({
        name: data.ship_name === null ? "Not available" : data.ship_name,
        id: data.ship_id === null ? "Not available" : data.ship_id,
        type: data.ship_type === null ? "Not available" : data.ship_type,
        abs: data.abs === null ? "Not available" : data.abs,
        class: data.class === null ? "Not available" : data.class,
        port: data.home_port === null ? "Not available" : data.home_port,
        mmsi: data.mmsi === null ? "Not available" : data.mmsi,
        image: data.image === null ? image_sample : data.image,
        missions: data.missions === null ? "Not available" : data.missions,
        year: data.year_built === null ? "Not available" : data.year_built,
        weight: data.weight_kg === null ? "Not available" : data.weight_kg
    }))
    return validatedData
}

export const loadTypeFilterOptions = (payload: any, value:string) => {
    const dataType: Option[] = [];
    payload.map((data: any) => {
      if (!dataType.some((item) => item.value === data[`${value}`])) {
        dataType.push({ label: data[`${value}`], value: data[`${value}`] });
      }
    });
    return dataType;
}