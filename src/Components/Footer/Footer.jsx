import React from 'react';

export default function Footer() {
  const customFooterStyle = {
    backgroundColor: '#1E1E1E',
    color: 'lightgray',
    padding: '10px',
    borderTop: '1px solid #333',
  };

  return (
    <footer className="custom-footer" style={customFooterStyle}>
      <div className="container text-center">
        <p style={{ color: '#F9A825' }}>&copy; {new Date().getFullYear()} John Doe</p>
      </div>
    </footer>
  );
}
