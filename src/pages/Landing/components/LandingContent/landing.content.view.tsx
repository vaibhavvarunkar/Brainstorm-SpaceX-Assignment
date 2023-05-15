import React from 'react'
import { Button } from 'react-bootstrap'
import "./landing.content.styles.css"

interface LandingContentProps {
    getStartedClick: () => void
}
const LandingContent: React.FC<LandingContentProps> = (props) => {

    return (
        <div className='image'>
            <h2 className='tagline'>Exploring SpaceX: Unvieling The Mysteries Of Space</h2>
            <p>Embark on a captivating journey through the cosmos as we harness the power of SpaceX's public API, providing you with an immersive experience filled with real-time data,awe-inspiring visuals, and fascinating insights into the groundbreaking achievements of Elon Musk's visionary space exploration company.</p>
            <br />
            <Button onClick={props.getStartedClick} className='btn' variant="success" size="lg">
                Get Started
            </Button>
        </div>
    )
}

export default LandingContent