import React from 'react';
import Link from 'next/link';

function UnderConstruction(props) {
	//console.log(props);
	return(
		<div className="container">
      
      <h1 className="text">En Construcción</h1>
      <p className="text">El sitio estará listo pronto!</p>
      <img src="/static/LogoHAYD.png" alt="HAYD"/>

      <div className="btnContainer">
        <button type="button">Contáctanos!</button>
        <button type="button">Acerca de nosotros!</button>
      </div>

      <style jsx>{`
        .container{
          border-radius: 10px;
          background: rgba(255,255,255,0.2);
          padding: 10px;
          margin: 30px;
          height: 100%;
          text-align: center;
          color: #fff;
        }
        .text{
          margin: 10px;
        }
        .btnContainer{
          display: grid;
          column-gap: 50px;
          grid-auto-flow: column;
          grid-template-columns: repeat(2, 1fr);
          margin: 10px;
        }
        button{
          border-radius: 5px;
          border: 3px solid #fff;
          padding: 10px;
          background: #052A4F;
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          -webkit-transition-duration: 0.4s; /* Safari */
          transition-duration: 0.4s;
        }
        button:hover,
        button:active
        {
          color: #052A4F;
          background: #fff;
        }
        img{
          width: 25%;
        }
      `}</style>
    </div>
	);
}

export default UnderConstruction;