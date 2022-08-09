

import {
    CardElement,
    useElements,
    useStripe,
  } from "@stripe/react-stripe-js";
  import { useState } from 'react'

const PaymentForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const stripe = useStripe()
    const elements = useElements()

    const createSubscription = async () => {
        try {
            
        } catch (err) {
            console.log(err)
            alert('payment failed', + err.message)
        }
    } 

  return (
    <div style={{ width: "40%" }}>
      Name:{" "}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Email:{" "}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <CardElement />
      <br />
      <button onClick={createSubscription}>Subscribe</button>
    </div>
  )
}

export default PaymentForm

