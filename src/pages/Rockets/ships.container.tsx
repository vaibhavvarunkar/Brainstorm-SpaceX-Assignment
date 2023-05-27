import React, { useEffect, useState } from 'react'
import ShipsView from './ships.view'
import { useDispatch, useSelector } from 'react-redux'
import { _getShipsInfo } from '../../service/Actions/shipsActions'
import { AppDispatch } from '../../service/store'
import { FilterOptions, Option, ShipInfo, ShipsInitialState, SliceTypes } from '../../service/models'
import { dispatchSetPopupData, dispatchSetPortParam, dispatchSetTypeParam, dispatchSetYearParam } from '../../service/Slices/Ships/shipsSlice'
import { MultiValue, SingleValue } from 'react-select'
const Ships = () => {

  //dispatch hook
  const dispatch = useDispatch<AppDispatch>();

  //useSelector hook to get data from redux
  const ships: ShipsInitialState = useSelector((state: SliceTypes) => state.ships);

  //state for active page number
  const [activePage, setActivePage] = useState<number>(1)

  //state for popup visibility
  const [isVisible, setIsVisible] = useState<boolean>(false)

  //state for selected filters
  const [typeFilterSelected, setTypeFilterSelected] = useState<MultiValue<Option> | SingleValue<Option>>([])
  const [yearFilterSelected, setYearFilterSelected] = useState<SingleValue<Option> | MultiValue<Option>>([])
  const [portFilterSelected, setPortFilterSelected] = useState<SingleValue<Option> | MultiValue<Option>>([])



  let count = 0
  //dispatch method for fetching ships info
  const dispatchGetRockets = () => {
    dispatch(_getShipsInfo({ ship_type: ships.typeParam.join(","), year_built: ships.yearParam, home_port: ships.portParam }))
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
      count = Math.floor(ships.data.length / 6) + 1
    }
    return count
  }

  //function to update active page state
  const updatePage = (value: number) => {
    if (value === 0 || value === -1) {
      if (value === 0) {
        if (value === 0 && activePage === count) {
          setActivePage(calculatePageCount())
        } else {
          setActivePage(activePage + 1)
        }
      }
      else {
        if (value === -1 && activePage === 1) {
          setActivePage(1)
        } else {
          setActivePage(activePage - 1)
        }
      }
    }
    else {
      setActivePage(value)
    }

  }

  const setVisibility = (item?: ShipInfo) => {
    setIsVisible(!isVisible)
    dispatch(dispatchSetPopupData(item))
    window.scrollTo(0, 0)
  }

  const handleChangeType = (item: MultiValue<Option> | SingleValue<Option>) => {
    let options: any = []
    if (Array.isArray(item)) {
      item.forEach((data: Option) => {
        options.push(data.value)
      })
      dispatch(dispatchSetTypeParam(options))
      setTypeFilterSelected(item)
    }
  }


  const handleChangeYear = (item: MultiValue<Option> | SingleValue<Option>) => {
    dispatch(dispatchSetYearParam(item))
    setYearFilterSelected(item)
  }

  const handleChangePort = (item: MultiValue<Option> | SingleValue<Option>) => {
    dispatch(dispatchSetPortParam(item))
    setPortFilterSelected(item)
  }

  const submit = () => {
    dispatchGetRockets()
  }


  const filterItems: FilterOptions[] = [{
    placeholder: "Select Type",
    options: ships.TypeFilter,
    handleChange: handleChangeType,
    selected: typeFilterSelected,
    isMulti: true
  },
  {
    placeholder: "Select Year Built",
    options: ships.yearFilter,
    handleChange: handleChangeYear,
    selected: yearFilterSelected,
    isMulti: false
  },
{
  placeholder: "Select Home Port",
  options: ships.portFilter,
  handleChange: handleChangePort,
  selected: portFilterSelected,
  isMulti: false
}
]

  return (
    <ShipsView submit={submit} filterItems={filterItems} popupData={ships.popupData} setVisibility={setVisibility} isVisible={isVisible} updatePage={updatePage} activePage={activePage} pageCount={calculatePageCount()} isLoading={ships.loaders.rocketsResponse.fullfilled} ships={ships.data.slice(((activePage - 1) * 6), (activePage * 6))} />
  )
}

export default Ships