import React, { useState } from 'react';

function PaymentForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the payment data
    const paymentData = {
      cardNumber,
      expiryDate,
      cvv,
    };

    try {
      // Make the API request
      const response = await fetch('https://api.example.com/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      
      if (response.ok) {
       
        console.log('Payment submitted successfully!');
      } else {
       
        const errorData = await response.json();
        console.error('Payment submission failed:', errorData);
      }
    } catch (error) {
     
      console.error('Payment submission failed:', error);
    }

    // Reset form fields
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  };
  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <label htmlFor="cardNumber">Card Number</label>
      <input
        type="text"
        id="cardNumber"
        value={cardNumber}
        onChange={(event) => setCardNumber(event.target.value)}
      />

      <label htmlFor="expiryDate">Expiry Date</label>
      <input
        type="text"
        id="expiryDate"
        value={expiryDate}
        onChange={(event) => setExpiryDate(event.target.value)}
      />

      <label htmlFor="cvv">CVV</label>
      <input
        type="text"
        id="cvv"
        value={cvv}
        onChange={(event) => setCvv(event.target.value)}
      />

      <div className="payment-method">
        <label>Payment Method:</label>
        <button
          type="button"
          className={paymentMethod === 'card' ? 'active' : ''}
          onClick={() => setPaymentMethod('card')}
        >
          Card
        </button>
        <button
          type="button"
          className={paymentMethod === 'upi' ? 'active' : ''}
          onClick={() => setPaymentMethod('upi')}
        >
          UPI
        </button>
      </div>

      <button type="submit">Submit Payment</button>
    </form>
  );
}

export default PaymentForm;