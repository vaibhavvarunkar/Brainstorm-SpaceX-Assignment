import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

interface PaginationViewProps {
pageCount:number
activePage:number
updatePage:(value:number) => void
isLoading:boolean
}

const PaginationView: React.FC<PaginationViewProps> = (props) => {
    let items = [];
    for (let number = 1; number <= props.pageCount; number++) {
        items.push(
            <Pagination.Item onClick={() => props.updatePage(number)} key={number} active={number === props.activePage}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <div style={{display:props.isLoading=== true ? "block" : "none"}}>
            <Pagination>
                <Pagination.Prev disabled={props.activePage === 1 ? true : false} onClick={()=> props.updatePage(-1)} />
                {items}
                <Pagination.Next disabled={props.activePage === props.pageCount ? true : false} onClick={()=> props.updatePage(0)}  />
            </Pagination>
        </div>
    )
}

export default PaginationView