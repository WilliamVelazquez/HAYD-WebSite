import React from 'react';

import TitleBand from './title-band';
import List from './list';
import SocialNetworks from './social-networks';

function AboutUs(props) {
	//console.log(props);
	return(
		<div className="container">
      
      <TitleBand title="Misión" position="left"/>

      <div className="textContainer">
        <p className="text">Impulsar la materialización de tu plan de negocios mediante el análisis financiero y el diseño de estrategias empresariales para la creación de valor.</p>
      </div>

      <TitleBand title="Visión" />

      <div className="textContainer">
        <p className="text">Ser la consultora de negocios más importante de México con influencia en toda América Latina favoreciendo un impacto económico positivo global.</p>
      </div>

      <TitleBand title="Valores" />

      <div className="textContainer">
        <List
          items={[
            {key:'Honestidad', description:'Nuestro activo más valioso.'},
            {key:'Responsabilidad', description:'Comprometernos a realizar nuestro trabajo en tiempo en y forma.'},
            {key:'Colaboración', description:'Ayudarte a cultivar el valor tu empresa.'},
            {key:'Pasión', description:'Convertirnos en parte de tu empresa hasta cumplir juntos los objetivos planteados.'},
            {key:'Respeto', description:'Siempre con una actitud y un trato digno.'}
          ]}
        />
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
          text-align: justify;
        }
      `}</style>
    </div>
	);
}

export default AboutUs;