import React from 'react'
import './MainBackground.scss'

const MainBackground = (props) => {
  const {children, backgroundImage} = props;
  return (
		<div className='mainBackground' style={{backgroundImage: `url(${backgroundImage})`}}>
			<h2>{children} </h2>
		</div>
	);
}

export default MainBackground