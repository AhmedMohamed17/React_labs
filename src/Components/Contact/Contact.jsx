import React from 'react';

const customButtonStyle = {
  position: 'relative',
  display: 'inline-block',
  fontSize: '24px',
  verticalAlign: 'top',
  textAlign: 'center',
  lineHeight: '1.5',
  color: '#4a90e2',
  fontWeight: '600',
  fontFamily: 'Arial, sans-serif',
  padding: '15px',
  borderRadius: '25px',
  width: '180px',
  height: '50px',
  transition: 'ease all 0.3s',
  background: '#ffcc00',
  border: 'none',
  cursor: 'pointer',
};

export default function Contact () {
  
  return (
    <div style={{ backgroundColor: '#2C0047', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5rem' }}>
      <div className="container text-center">
        <h2 className="my-5" style={{ color: '#ffcc00' }}>Invite Someone Special</h2>
        <form className="text-white">
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="guestName" className="form-label">Guest Name</label>
              <input type="text" className="form-control" id="guestName" />
            </div>
            <div className="col-md-6">
              <label htmlFor="guestEmail" className="form-label">Guest Email Address</label>
              <input type="email" className="form-control" id="guestEmail" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="guestMobile" className="form-label">Guest Mobile Number</label>
              <input type="tel" className="form-control" id="guestMobile" />
            </div>
            <div className="col-md-6">
              <label htmlFor="combineEntry" className="form-label">Combine Entry</label>
              <input type="text" className="form-control" id="combineEntry" />
            </div>
          </div>
          <button className="btn" style={customButtonStyle}>Send Invitation</button>
        </form>
      </div>
    </div>
  );
}


