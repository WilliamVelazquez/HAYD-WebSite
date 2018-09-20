import React, {Component} from 'react';

import Header from '../components/header';
import UnderConstruction from '../components/under-construction';

class Home extends Component{
  render() {
    return (
      <div>
        <Header active="Inicio" />
        <UnderConstruction />
        <style jsx global>{`
          body{
            margin: 0;
            font-family: system-ui;
            background: #052A4F;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;