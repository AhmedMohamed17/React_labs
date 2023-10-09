import React from 'react';
import HalloweenImage from '../Images/HalloweenImage.png';

const customButtonStyle = {
  position: 'relative',
  display: 'inline-block',
  fontSize: '18px',
  verticalAlign: 'middle',
  textAlign: 'center',
  lineHeight: '24px',
  color: '#6d42a2',
  fontWeight: '400',
  fontFamily: 'Arial, sans-serif',
  padding: '10px 20px',
  borderRadius: '25px',
  width: '135px',
  height: '42px',
  transition: 'ease all 0.4s',
  background: '#ffcc00',
};

export default function Home() {
  return (
    <div style={{ backgroundColor: '#1a0a31', minHeight: '100vh' }}>
      <div className="container">
        <div className="row">
          {/* Left column for the image */}
          <div className="col-md-6">
            <img src={HalloweenImage} alt="Halloween" className="img-fluid" />
          </div>
          {/* Right column for the text */}
          <div className="col-md-6 text-center text-white my-5 p-5">
            <div>
              <h1>October 31, 2018</h1>
              <h2 className="my-4" style={{ color: '#ffcc00' }}>Spooky Halloween</h2>
              <p className="h4 mb-4">
                Halloween, also known as All Hallows' Eve, is a yearly celebration observed in various countries on October 31st.
              </p>
              <button className="custom-btn" style={customButtonStyle}>Discover More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
