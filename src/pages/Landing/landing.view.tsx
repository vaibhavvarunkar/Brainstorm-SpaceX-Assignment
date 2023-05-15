import React from 'react'
import "./landing.styles.css"
import { Col, Row } from 'react-bootstrap'
import LandingImg from './components/LandingImg/landingImg.view'
import LandingContent from './components/LandingContent/landing.content.view'

interface LandingPageViewProps {
    getStartedClick:() => void

}
const LandingPageView: React.FC<LandingPageViewProps> = (props) => {
    return (
        <div className='outer-container'>
            <Row>
                <Col sm={12} lg={7}>
                    <LandingImg />
                </Col>
                <Col sm={12} lg={5}>
                    <LandingContent getStartedClick={props.getStartedClick} />
                </Col>
            </Row>
        </div>
    )
}

export default LandingPageView