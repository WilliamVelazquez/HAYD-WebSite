import React from 'react';

import TitleBand from './title-band';

function AboutUs(props) {
	//console.log(props);
	return(
		<div className="container">
      
      <TitleBand title="Misión" />

      <style jsx>{`
        .container{
          width:100%;
          background: #F1C40F;
        }
      `}</style>
    </div>
	);
}

export default AboutUs;