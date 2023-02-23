import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from './state/index'

// useSelector is used to access state
//useDispatch is used to access action creators
const Shop = () => {
    const dispatch=useDispatch();
    const amount=useSelector((state)=>{return state.amount});
    const {withdrawMoney,depositMoney}=bindActionCreators(actionCreators,dispatch);


  return (
    <>
        <h2>Buy Something</h2>
        <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
        Updated Balance is ({amount})
        <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
    </>
  )
}

export default Shop