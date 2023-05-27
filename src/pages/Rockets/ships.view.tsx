import React from 'react'
import "./ships.styles.css"
import { FilterOptions, ShipInfo } from '../../service/models'
import Loader from '../../components/Loader/loader.view'
import { Button, Col, Container, Row } from 'react-bootstrap'
import CardView from './components/Card/card.view'
import PaginationView from './components/Pagination/pagination.view'
import Popup from './components/Popup/popup.view'
import Filter from './components/Filter/filter.view'


interface ShipsViewProps {
  ships: ShipInfo[]
  isLoading: boolean
  pageCount: number
  activePage: number
  updatePage: (value: number) => void
  isVisible: boolean
  setVisibility: () => void
  submit:()=> void
  popupData: ShipInfo | any
  filterItems: FilterOptions[]
}
const ShipsView: React.FC<ShipsViewProps> = (props) => {
  return (
    <>
      <Container fluid className='rocket-page'>
        <Row>
          {
            props.filterItems.map((item: FilterOptions) => {
              return (
                <>
                  <Col sm={12} md={3}>
                    <div style={{ width: "100%", justifyContent: "center", padding:"0px 020px", display: props.isVisible ? "none" : "flex"}}>
                      <Filter isMulti={item.isMulti} selected={item.selected} handleChange={item.handleChange} placeholder={item.placeholder} options={item.options} />
                    </div>
                  </Col>
                </>
              )
            })
          }
          <Col className='d-flex justify-content-center' style={{ }} sm={12} md={3}>
              <Button style={{margin:"10px 0", display: props.isVisible ? "none" : "block"}} onClick={props.submit}>Submit</Button>
          </Col>
        </Row>
        <Row style={{ display: props.isVisible ? "none" : "" }} className='cards'>
          {
            props.ships.length > 0 &&
            <>
              {
                props.ships.map((item: ShipInfo) => {
                  return (
                    <React.Fragment key={item.id}>
                      <Col className='cards-body' sm={12} md={6} lg={4} >
                        <CardView setVisibility={props.setVisibility} item={item} />
                      </Col>
                    </React.Fragment>
                  )
                })
              }
            </>
          }
        </Row>
        <Container style={{display:props.ships.length === 0 ? "block" : "none", width:"100%", height:"100%", textAlign:"center"}}><h1 style={{marginTop:"2rem"}}>No Info Available...</h1></Container>
        <Container style={{ display: props.isVisible ? "none" : "" }} className='pagination-box'>
          <Loader isLoading={props.isLoading} />
          <PaginationView isLoading={props.isLoading} updatePage={props.updatePage} activePage={props.activePage} pageCount={props.pageCount} />
        </Container>
        <div style={{ display: props.isVisible ? "block" : "none" }}>
          <Popup popupData={props.popupData} setVisibility={props.setVisibility} />
        </div>
      </Container>
    </>

  )
}

export default ShipsView