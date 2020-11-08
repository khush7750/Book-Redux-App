import React,{useState} from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import {buyBook} from "../redux/index"
 function BookContainer(props) {

    const [number, setNumber] = useState(1)

    return (
        <div>
            <h1>Book Container</h1>
            <h1>Number of Books : {props.numberOfBooks}</h1>
            <input type="text" value={number} onChange = {e => setNumber( e.target.value)} />
            <Button onClick={() =>props.buyBook(number)}>Buy {number} Book</Button>
        </div>
    )
}

const mapStatetoProps = (state) =>{
    return{
        numberOfBooks:state.numberOfBooks
    }
}

const mapDispatctotoProps = (dispatch) =>{
    return{
        buyBook: function (number) {
            dispatch(buyBook(number))
        }
    }
}


export default connect(mapStatetoProps , mapDispatctotoProps) (BookContainer)