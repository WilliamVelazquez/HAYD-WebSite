import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function SocialNetworks(props) {
	//console.log(props);
  //const element = <FontAwesomeIcon icon={faCoffee} />
	return(
		<div className="container">

      <button 
        className="fa" 
        type="button"
        onClick={props.facebook || null}
      >
        <FontAwesomeIcon icon={ faFacebookF } />
      </button>

      <button 
        className="fa" 
        type="button"
        onClick={props.twitter || null}
      >
        <FontAwesomeIcon icon={ faTwitter } />
      </button>

      <button 
        className="fa" 
        type="button"
        onClick={props.instagram || null}
      >
        <FontAwesomeIcon icon={ faInstagram } />
      </button>
      
      <style jsx>{`
        .container{
          margin: 15px;
          display: grid;
          grid-gap: 25px;
          grid-auto-flow: column;
          grid-auto-columns: min-content;
          justify-content: center;
        }
        .text{
          margin: 10px;
        }
        .fa{
          padding: 15px;
          font-size: 20px;
          width: 60px;
          text-align: center;
          text-decoration: none;
          margin: 5px 2px;
          border-radius: 50%;
          justify-self: center;
        }
        button{
          cursor: pointer;
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
          border: none;
        }
        img{
          width: 25%;
        }
      `}</style>
    </div>
	);
}

export default SocialNetworks;