import React from 'react';

function TitleBand(props) {
	//console.log(props);
	return(
		<div className="container">
      
      <h2>{props.title}</h2>

      <style jsx>{`
        .container{
          width:100%;
          background: #F1C40F;
          margin:40px 0px;
          margin-bottom: 25px;
        }
        h2{
          margin:0;
          padding:15px;
          color:#052A4F;
          text-align: ${props.position || "left"};
        }
      `}</style>
    </div>
	);
}

export default TitleBand;