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
        <p className="text">Somos una empresa enfocada en consultoría financiera, nuestro propósito es ayudarte a conocer la factibilidad y rentabilidad de tu empresa, startup o el proyecto que tienes planeado realizar, ayudarte a materializar tu idea de negocio y diseñar estrategias para optimizar tus recursos e incrementar tus rendimientos, lo haremos a través de un análisis financiero que nos dirá la situación de tu empresa  o el crecimiento esperado si es que es una empresa nueva, buscando siempre ayudar a mejorar la estructura financiera de tu empresa para un funcionamiento óptimo.</p>
      </div>

      <TitleBand title="Visión" />

      <div className="textContainer">
        <p className="text">Ser la consultora de negocios más importante de México y poder ampliar operaciones a toda América Latina ayudando a mejorar la estructura financiera de empresas en todo el mundo y generar un impacto económico positivo global.</p>
      </div>

      <TitleBand title="Valores" />

      <div className="textContainer">
        <List
          items={[
            {key:'Honestidad', description:'Siempre decir la verdad al cliente.'},
            {key:'Responsabilidad', description:'Comprometernos a realizar nuestro trabajo en tiempo en y forma.'},
            {key:'Colaboración', description:'Ayudarte mano a mano a lograr tus metas y ayudarte a crecer tu empresa.'},
            {key:'Pasión', description:'Volvernos parte de tu empresa hasta cumplir juntos los objetivos planteados.'},
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