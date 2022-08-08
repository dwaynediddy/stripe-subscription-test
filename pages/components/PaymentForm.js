import {
    CardElement,
    useStripe,
    useElements,
    Element
  } from "@stripe/react-stripe-js"
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
    <Element>
        Name: {''}
            <input 
                text='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            Email: {''}
            <input 
                text='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <CardElement />

            <button onClick={createSubscription}>subscribe</button>
    </Element>
  )
}

export default PaymentForm