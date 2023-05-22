import React from 'react'

interface CloseButtonProps {

}
const CloseButton: React.FC<CloseButtonProps> = (props) => {
    return (
        <>
            <button style={{height:"50px", width:"50px"}} type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </>
    )
}

export default CloseButton