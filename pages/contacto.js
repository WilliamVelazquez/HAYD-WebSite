import React, {Component} from 'react';

import Header from '../components/header';

class Contacto extends Component{
  render() {
    return (
      <div>
        <Header active="Contacto" />
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

export default Contacto;