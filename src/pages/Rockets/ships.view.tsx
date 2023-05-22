import React from 'react'
import "./ships.styles.css"
import { ShipInfo } from '../../service/models'
import Loader from '../../components/Loader/loader.view'
import { Col, Container, Row } from 'react-bootstrap'
import CardView from './components/Card/card.view'
import PaginationView from './components/Pagination/pagination.view'
import Popup from './components/Popup/popup.view'


interface ShipsViewProps {
  ships: ShipInfo[]
  isLoading: boolean
  pageCount: number
  activePage: number
  updatePage: (value: number) => void
  isVisible: boolean
  setVisibility: () => void
  popupData: ShipInfo | any
}
const ShipsView: React.FC<ShipsViewProps> = (props) => {
  return (
    <>
      <Container fluid className='rocket-page'>
        <Row style={{display:props.isVisible ? "none" : ""}} className='cards'>
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
        <Container style={{display:props.isVisible ? "none" : ""}} className='pagination-box'>
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