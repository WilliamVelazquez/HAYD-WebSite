import React from 'react';

function RibbonPanel(props) {
  return(
    <div className="content">
      <h1 className="ribbon">{props.title}</h1>
      {props.children}
      <style jsx>{`
        .content{
          background:#e6e2c8;
          width: 80%;
          min-height: 3.750em; 
          margin: 2em auto;
          padding: 1.250em;
          border-radius: 0.313em;
          box-shadow: 0 2px 5px 0 rgba(0,0,0,0.5);
          line-height: 1.5em;
          color: #292929;
        }
        .ribbon{
          position:relative;
          padding: 0 0.5em;
          font-size:2.000em;
          margin: 0 0 0 -0.625em;
          line-height: 1.875em;
          color: #f1c40f;
          background: #0a73ed;
          border-radius: 0 0.156em 0.156em 0;
          box-shadow: -1px 2px 3px rgba(0,0,0,0.5);
        }
        .ribbon:before, .ribbon:after{
          position:absolute;
          content: '';
          display: block;
        }
        .ribbon:before{
          width: 0.469em;
          height: 100%;
          padding: 0 0 0.438em;
          top:0;
          left: -0.469em;
          background:inherit;
          border-radius: 0.313em 0 0 0.313em;
        }
        .ribbon:after{
          width: 0.313em;
          height: 0.313em;
          background: rgba(0,0,0,0.35);
          bottom: -0.313em;
          left: -0.313em;
          border-radius: 0.313em 0 0 0.313em;
          box-shadow: inset -1px 2px 2px rgba(0,0,0,0.3);
        }

        @media (max-width: 667px) {
          .ribbon{
            line-height: 1.143em;
            padding: 0.5em;
          }
          .ribbon:before, .ribbon:after{
            font-size: 0.714em;
          }
        }
      `}</style>
    </div>
  );
}

export default RibbonPanel;