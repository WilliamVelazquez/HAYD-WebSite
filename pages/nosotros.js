import React, {Component} from 'react';

import Header from '../components/header';

class Nosotros extends Component{
  render() {
    return (
      <div>
        <Header active="Nosotros" />
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

export default Nosotros;