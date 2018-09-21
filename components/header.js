import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Header(props) {
	//console.log(props);
	return(
		<header>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta 
          name="description" 
          content="Te ayudamos a conocer la factibilidad, viabilidad y rentabilidad de tu proyecto con indicadores financieros y estrategias para optimizar tu operación."
        />
        {
          (props.active=="Inicio" || props.active=="Nosotros" || props.active=="Contacto")?
          <meta name="robots" content="index, follow" />
          :<meta name="robots" content="noindex, nofollow" />
        }
        <title>{props.active || "Inicio"}</title>
        <link rel="icon" href="/static/HAYD.ico" />
      </Head>
      
      <nav className="navbar">
        <div className="left">
          <Link href="/">
            <img className="btn" src="/static/LogoHAYD.png" alt="HAYD"/>
          </Link>  
            <h2>HAYD Consulting</h2>
        </div>
        <Link prefetch href="/">
          <a className={`${props.active=="Inicio"?"active":""}`}>Inicio</a>
        </Link>
        <Link prefetch href="/nosotros">
          <a className={`${props.active=="Nosotros"?"active":""}`}>Nosotros</a>
        </Link>
        <Link prefetch href="/contacto">
          <a className={`${props.active=="Contacto"?"active":""}`}>Contacto</a>
        </Link>
      </nav>

      <style jsx>{`
        header{
          background: #0A73ED;
          padding: 10px;
          border-radius: 0px 0px 10px 10px;
        }
        header a{
          text-decoration: none;
          color: #fff;
          font-size: 18px;
          margin-right: 20px;
          justify-self: right;
        }
        header a:hover{
          font-weight: bold;
        }
        .active{
        	font-weight: bold;
          border-bottom: 2px solid #fff;
        }
        .navbar{
          display:grid;
          grid-template-columns: 9fr 1fr 1fr 1fr;
          align-items:center;
        }
        img{
          width: 50px;
        }
        .btn{
          cursor:pointer;
        }
        .left{
          flex:1;
          float:left;
          display:grid;
          grid-auto-flow: column;
          grid-template-columns: 60px 1fr;
        }
        .left h2{
          margin:0;
          padding:0;
          align-self:center;
          color:#052A4F;
        }
        @media only screen and (max-width : 768px) {
          .left h2{
            font-size:20px;
          }
        }
        @media only screen and (max-width : 667px) {
          .left h2{
            display:none;
          }
        }
      `}</style>
    </header>
	);
}

export default Header;