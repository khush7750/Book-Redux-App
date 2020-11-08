import React from 'react'
import { Button } from 'reactstrap'

import {useSelector ,useDispatch} from "react-redux"
import {buyBook} from "../redux/index"
function HookBookContainer() {
    const numberOfBooks = useSelector(state => state.numberOfBooks);
    const dispatch = useDispatch();
    
    return (
        <div>
            <h1>Hook Contaner</h1>
            <h2>Number Of Books : {numberOfBooks}</h2>
            <Button onClick={() => dispatch(buyBook())}>BuyBook</Button>
        </div>
    )
}

export default HookBookContainer

