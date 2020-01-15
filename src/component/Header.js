import React from 'react';
import './Header.css';

class Header extends React.Component {
  render (){
    return (
    
      <header className="App-header">
       <img src={'https://thecheapfares.s3-us-west-2.amazonaws.com/logo/logo.png'} className="App-logo" alt="logo" />
      </header>

  );
  }
}
export default Header;
