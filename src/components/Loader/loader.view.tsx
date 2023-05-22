import React from 'react'
import { Spinner } from 'react-bootstrap'

interface LoaderProps{
isLoading:boolean
}
const Loader:React.FC<LoaderProps> = (props) => {
    return (
        <Spinner style={{display:props.isLoading ? "none" : "block"}} animation="border" variant='warning' role="status">
            <span className="visually-hidden">Loading...</span>,
        </Spinner>
    )
}

export default Loader