import React from 'react';

import Header from '../components/header';
import UnderConstruction from '../components/under-construction';

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    const { statusCode } = this.props;

    return (
      <div>
        <Header active={`Oh no :( Error ${statusCode}`} />
        {
          statusCode === 404 ?
          <UnderConstruction 
            msg="Esta página no existe :("
          />
          :
          <UnderConstruction 
            msg="Hubo un problema :( Intenta nuevamente en un momento"
          />
        }
        <style jsx global>{`
          body{
            margin: 0;
            margin-top: 100px;
            font-family: system-ui;
            background: #052A4F;
          }
        `}</style>
      </div>
    )
  }
}