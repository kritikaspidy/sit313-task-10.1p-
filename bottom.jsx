import React, { useState } from 'react';

const BottomSection = () => {
  const [email, setEmail] = useState('');

  const subscribe = () => {
    fetch('http://localhost:5500/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Email: email }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Email sent successfully');
          // Handle success, e.g., show a success message to the user
        } else {
          console.error('Email not sent');
          // Handle error, e.g., show an error message to the user
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="Btm_bar">
      <p>Sign Up for Daily Insider</p>
      <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={subscribe}>SUBSCRIBE</button>
    </div>
  );
};

export default BottomSection;