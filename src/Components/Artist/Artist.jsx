import React from 'react';
import artistImage from '../Images/artist-image.png';

export default function Artist() {
  const artistInfo = [
    {
      name: 'DJ Remerson Huke',
      role: 'Lead DJ On Deadpoll',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.',
    },
    {
      name: 'DJ Remerson Huke',
      role: 'Lead DJ On Deadpoll',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.',
    },
  ];

  const artistElements = artistInfo.map((artist, index) => (
    <div key={index} className="text-white">
      <img src={artistImage} alt="Artist" />
      <div>
        <h2>{artist.name}</h2>
        <h3>{artist.role}</h3>
        <p>{artist.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="container-fluid text-center" style={{ backgroundColor: '#2C0047', height: '100vh' }}>
      <h2 className="p-5" style={{ color: '#f7ea66' }}>Our Halloween's Artist</h2>
      <div className="container d-flex justify-content-center">
        {artistElements}
      </div>
    </div>
  );
}
