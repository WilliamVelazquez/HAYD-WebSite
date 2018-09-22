import React from 'react';

function List(props) {
	//console.log(props);
	return(
		<div className="container">
      
      {
        props.items.map(item => {
          return(
            <div key={item.key}>
              <p className="title">{`• ${item.key}: `}</p>
              <p className="description">{item.description}</p>
            </div>
          )
        })
      }

      <style jsx>{`
        .container{
          width:100%;
          margin-bottom: 20px;
        }
        .title{
          color: #fff;
          font-weight: bold;
          text-align: ${props.position || "left"};
        }
        .description{
          color: #fff;
          margin-left: 10px;
          text-align: ${props.position || "justify"};
        }
      `}</style>
    </div>
	);
}

export default List;