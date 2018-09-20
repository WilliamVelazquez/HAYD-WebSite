import React, {Component} from 'react';
import Link from 'next/link';

class Contacto extends Component{
  render() {
    return (
      <div>
        <header>
          <nav className="navbar">
            <div className="left">
              <img src="/static/LogoHAYD.png" alt="HAYD"/>
            </div>
            <Link activeClassName="active" href="/">
              <a>Inicio</a>
            </Link>
            <Link activeClassName="active" href="/nosotros">
              <a>Nosotros</a>
            </Link>
            <Link activeClassName="active" href="/contacto">
              <a>Contáctanos</a>
            </Link>
          </nav>
        </header>
        <style jsx>{`
          header{
            color: #fff;
            background: #0A73ED;
            padding: 10px;
          }
          header a{
            text-decoration: none;
            color: white;
            font-size: 18px;
            margin-right: 20px;
          }
          header a:hover{
            border-bottom: 2px solid #fff;
          }
          .active{
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
          .left{
            flex:1;
            float:left;
          }
        `}</style>

        <style jsx global>{`
          body{
            margin: 0;
            font-family: system-ui;
            background: #052A4F;
          }
        `}</style>
      </div>
    );
  }
}

export default Contacto;