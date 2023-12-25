import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from './state/index'

export default function Shop() {
  const dispatch = useDispatch();
  const {depositMoney,withdrawMoney}=bindActionCreators(actionCreators,dispatch);

  return (
    <div>
      {/* <button type="button" class="btn btn-primary" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
      Add to Cart
      <button type="button" class="btn btn-primary" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button> 
      */}
      <button type="button" class="btn btn-primary" onClick={()=>{depositMoney(100,2)}}>+</button>
      Add to Cart
      <button type="button" class="btn btn-primary" onClick={()=>{withdrawMoney(100)}}>-</button>
    </div>
  )//onClick={()=>{dispatch(actionCreators.depositMoney(100))}}
  //onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}
}
