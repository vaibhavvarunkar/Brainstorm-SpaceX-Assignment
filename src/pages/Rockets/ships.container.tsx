import React, { useEffect, useState } from 'react'
import ShipsView from './ships.view'
import { useDispatch, useSelector } from 'react-redux'
import { _getShipsInfo } from '../../service/Actions/shipsActions'
import { AppDispatch } from '../../service/store'
import { ShipInfo, ShipsSlice } from '../../service/models'
import { dispatchSetPopupData } from '../../service/Slices/Ships/shipsSlice'

const Ships = () => {

  //dispatch hook
  const dispatch = useDispatch<AppDispatch>();

  //useSelector hook to get data from redux
  const ships: ShipsSlice = useSelector((state: any) => state.ships);

  //state for active page number
  const [activePage, setActivePage] = useState<number>(1)

  //state for popup visibility
  const [isVisible, setIsVisible] = useState<boolean>(false)

  let count = 0
  //dispatch method for fetching rockets info
  const dispatchGetRockets = () => {
    dispatch(_getShipsInfo({}))
  }

  useEffect(() => {
    dispatchGetRockets()
  }, [])


  //function to calculate page count
  const calculatePageCount = (): number => {
    if (ships.data.length % 6 === 0) {
      count = Math.floor(ships.data.length / 6)
    }
    else {
      count =Math.floor(ships.data.length / 6) + 1
    }
    return count
  }

  //function to update active page state
  const updatePage = (value: number) => {
    if (value === 0 || value === -1) {
      if (value === 0 ) {
        if(value === 0 && activePage === count){
          setActivePage(calculatePageCount())
        }else{
          setActivePage(activePage + 1)
        }
      }
      else{
        if(value === -1 && activePage === 1){
          setActivePage(1)
        }else{
          setActivePage(activePage - 1)
        }
      }
    }
    else {
      setActivePage(value)
    }

  }

  const setVisibility = (item?:ShipInfo) => {
    setIsVisible(!isVisible)   
    dispatch(dispatchSetPopupData(item)) 
    window.scrollTo(0,0)
}

  return (
    <ShipsView popupData={ships.popupData} setVisibility={setVisibility} isVisible={isVisible} updatePage={updatePage} activePage={activePage} pageCount={calculatePageCount()} isLoading={ships.loaders.rocketsResponse.fullfilled} ships={ships.data.slice(((activePage-1)*6),(activePage*6) )} />
  )
}

export default Ships