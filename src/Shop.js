import React from 'react'
import { useDispatch } from 'react-redux'
import {actionCreators} from './state/index'


const Shop = () => {
    const dispatch=useDispatch();
  return (
    <>
        <h2>Buy Something</h2>
        <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
        Add to cart
        <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
    </>
  )
}

export default Shop