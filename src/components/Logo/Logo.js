import React from 'react';
import Tilt from 'react-parallax-tilt';
import logo from './logo.svg';

const Logo = ()=>{
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" style={{ height: 150, width: 150, margin:20,
												background:'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)' }}>
				<div className="Tilt-inner">
					<img src={logo} alt="logo" style={{paddingTop:20}}/>
				</div>
			</Tilt>
		</div>
	)
}

export default Logo;