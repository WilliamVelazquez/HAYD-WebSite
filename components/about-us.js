import React from 'react';

import TitleBand from './title-band';
import SocialNetworks from './social-networks';

function AboutUs(props) {
	//console.log(props);
	return(
		<div className="container">
      
      <TitleBand title="Misión" />

      <div className="textContainer">
        <p className="text">Nuestra misión es.................</p>
        <p className="text">Nuestra misión es.................</p>
        <p className="text">Nuestra misión es.................</p>
        <p className="text">Nuestra misión es.................</p>
      </div>

      <TitleBand title="Visión" />

      <div className="textContainer">
        <p className="text">Nuestra misión es.................</p>
        <p className="text">Nuestra misión es.................</p>
        <p className="text">Nuestra misión es.................</p>
        <p className="text">Nuestra misión es.................</p>
      </div>

      <TitleBand title="Valores" />

      <div className="textContainer">
        <p className="text">Nuestra misión es.................</p>
        <p className="text">Nuestra misión es.................</p>
        <p className="text">Nuestra misión es.................</p>
        <p className="text">Nuestra misión es.................</p>
      </div>

      <SocialNetworks />

      <style jsx>{`
        .container{
          width:100%;
        }
        .textContainer{
          border-radius: 10px;
          background: rgba(255,255,255,0.2);
          padding: 10px;
          margin: 0px 30px;
          height: 100%;
          text-align: left;
          color: #fff;
        }
        .text{
          margin:5px;
        }
      `}</style>
    </div>
	);
}

export default AboutUs;