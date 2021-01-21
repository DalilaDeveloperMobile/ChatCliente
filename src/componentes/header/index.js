import React from 'react';

function Header() {
  return (
    <div className="row">
      <div className="Item1 col-xs align-self-center" style={{
        margin: '6px', backgroundColor: ' #C4C4C4',
        height: '6vh', width: '40px'
      }}></div>

      <div className="Item2 col-xs align-self-center offset-sm-3" style={{ backgroundColor: '#C4C4C4', height: '6vh', width: '40px' }}></div>
      <h1 className="Item3 col align-self-center " style={{
        fontSize: '90%',
        fontFamily: ' Arial, Helvetica, sans-serif', fontStyle: 'normal', fontWeight: 'bold', color: '#000000'
      }} > John Doe</h1>
    </div>
  );
}

export default Header;