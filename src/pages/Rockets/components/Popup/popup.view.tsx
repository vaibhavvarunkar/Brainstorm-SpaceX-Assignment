import React from 'react'
import "./popup.view.css"
import { CloseButton, Col, Container, Row } from 'react-bootstrap'
import { ShipInfo } from '../../../../service/models'


interface PopupProps {
    setVisibility:()=> void
    popupData:ShipInfo
}
const Popup: React.FC<PopupProps> = (props) => {
    return (
        <div className='popup-container'>
            <div className='close-button'>
                <CloseButton onClick={()=> props.setVisibility()} />
            </div>
           <div className="popup-content" >
                    <Row className="justify-content-center">
                        <Col className="d-flex justify-content-center align-items-center"  sm={12} lg={6}>
                            <img alt='ship' src={props?.popupData?.image}></img>
                        </Col>
                        <Col  style={{ height:"600px", textJustify:"auto"}} sm={12} lg={6}>
                            <Row>
                                <Col className="text-center"  xs={6}>
                                    <h3>Name</h3>
                                    <h3>ID</h3>
                                    <h3>MMSI</h3>
                                    <h3>Port</h3>
                                    <h3>ABS</h3>
                                    <h3>Class</h3>
                                    <h3>Type</h3>
                                    <h3>Year Built</h3>
                                    <h3>Weight</h3>
                                </Col>
                                <Col className="text-left"  xs={6}>
                                    <span>{props?.popupData?.name}</span>
                                    <span>{props?.popupData?.id}</span>
                                    <span>{props?.popupData?.mmsi}</span>
                                    <span>{props?.popupData?.port}</span>
                                    <span>{props?.popupData?.abs}</span>
                                    <span>{props?.popupData?.class}</span>
                                    <span>{props?.popupData?.type}</span>
                                    <span>{props?.popupData?.year}</span>
                                    <span>{props?.popupData?.weight + "KG"}</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
           </div>
           
        </div>
    )
}

export default Popup