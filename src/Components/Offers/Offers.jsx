import React from 'react';
import './Offers.css';




const WhatWeOffer = () => {
  return (
    <div className="what-we-offer">
          <h1 className='type'>WHAT WE OFFER</h1> 
      <div className='offers'>
        <h2>Immutable Record Keeping</h2>
        <p>Our blockchain-based land registry ensures tamper-proof and irreversible record keeping.<br /> Property ownership history remains secure and unalterable, enhancing trust and transparency.</p>
      </div>
      <div className='offers'>
        <h2>Transparent Transactions</h2>
        <p>Every property transaction—be it a sale or transferis recorded on the public ledger.<br/> Participants can trace the entire history, promoting accountability and reducing fraud.</p>
      </div>
      <div className='offers'>
        <h2>Decentralization and Trustlessness</h2>
        <p>Our system operates on a decentralized network of nodes. No single authority controls<br/> the registry, minimizing reliance on intermediaries. Trust is established through consensus algorithms.</p>
      </div>
      <div className='offers'>
        <h2>Enhanced Security with Cryptography</h2>
        <p>Property data is encrypted using cryptographic techniques. Ownership details, boundaries,<br/> and rights are securely stored, preventing unauthorized access or manipulation.</p>
      </div>
      <div className='offers'>
        <h2>Efficient Processes and Reduced Costs</h2>
        <p>Streamlined workflows lead to faster property transfers and reduced administrative overhead.<br/> Smart contracts automate tasks, eliminating delays and paperwork.</p>
      </div>
    </div>
  );
};

export default WhatWeOffer;
