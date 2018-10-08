import React from 'react';

import SimplePanel from './simple-panel';
import TitleBand from './title-band';
import List from './list';
import SocialNetworks from './social-networks';

function AboutUs(props) {
	//console.log(props);
	return(
		<div className="container">

      <TitleBand title="Misión" position="left"/>
      <SimplePanel text="Impulsar la materialización de tu plan de negocios mediante el análisis financiero y el diseño de estrategias empresariales para la creación de valor."/>
      
      <TitleBand title="Visión" />
      <SimplePanel text="Ser la consultora de negocios más importante de México con influencia en toda América Latina favoreciendo un impacto económico positivo global."/>

      <TitleBand title="Valores" />

      <SimplePanel>
        <List
          items={[
            {key:'Honestidad', description:'Nuestro activo más valioso.'},
            {key:'Responsabilidad', description:'Comprometernos a realizar nuestro trabajo en tiempo en y forma.'},
            {key:'Colaboración', description:'Ayudarte a cultivar el valor tu empresa.'},
            {key:'Pasión', description:'Convertirnos en parte de tu empresa hasta cumplir juntos los objetivos planteados.'},
            {key:'Respeto', description:'Siempre con una actitud y un trato digno.'}
          ]}
        />
      </SimplePanel>

      <SocialNetworks />

      <style jsx>{`
        .container{
          width:100%;
        }
      `}</style>
    </div>
	);
}

export default AboutUs;