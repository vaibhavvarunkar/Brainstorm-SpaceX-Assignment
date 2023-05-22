import axios, { AxiosResponse } from "axios"
import { API_BASE_URL } from "../constants/constants"

export async function getAPI<T>(
    params: T,
    url: string,
  ): Promise<AxiosResponse | undefined> {
    try {
      const response: AxiosResponse = await
        axios.get(API_BASE_URL + url, {
          params,
        })
      return response
    } catch (error) {
      const err: any = error
      throw err
    }
  }