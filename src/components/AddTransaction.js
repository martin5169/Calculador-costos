import React, {useState,useContext}from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

  const[text,setText]= useState("");
  const[amount,setAmount]= useState(0);
  const{addTransaction} = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id:Math.floor(Math.random()*100000),
      text:text,
      amount: +amount
    }
    setAmount(0);
    setText("");
    
    addTransaction(newTransaction);
  }

  return (
    
    <>
    <h3>Agregar transacción</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Detalle</label>
          <input type="text" value={text} onChange={(e)=> setText(e.target.value)}placeholder="Ingresa el detalle" />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Monto <br />
            (negativo - egreso, positivo - ingreso)</label
          >
          <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Agregar</button>
      </form>
    

    </>

  )
}

export default AddTransaction;
