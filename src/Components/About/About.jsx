import React from 'react';

const containerStyle = {
  backgroundColor: '#2C0047',
  height: '100vh',
};

const headingStyle = {
  color: '#f7ea66',
  fontSize: '24px',
  fontWeight: '400',
  fontFamily: 'Berkshire Swash',
  padding: '12px',
};

const paragraphStyle = {
  color: 'white',
};

const buttonStyle = {
  position: 'relative',
  display: 'inline-block',
  fontSize: '20px',
  verticalAlign: 'top',
  textAlign: 'center',
  lineHeight: '24px',
  color: '#7f479a',
  fontWeight: '400',
  fontFamily: 'Berkshire Swash',
  padding: '12px',
  borderRadius: '35px',
  width: '155px',
  height: '48px',
  WebkitTransition: 'ease all .5s',
  MozTransition: 'ease all .5s',
  OTransition: 'ease all .5s',
  transition: 'ease all .5s',
  background: '#f7ea66',
};

export default function About() {
  return (
    <div className="container-fluid text-center" style={containerStyle}>
      <h2 className='p-5' style={headingStyle}>About The Party</h2>
      <p className='text-white' style={paragraphStyle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
      </p>
      <p className='text-white' style={paragraphStyle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </p>
      <button className='btn' style={buttonStyle}>Know More</button>
    </div>
  );
}
