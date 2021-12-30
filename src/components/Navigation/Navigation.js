import React from 'react'
import './Navigation.css'

const Navigation = ({PageChange, Webpage})=>{
	if (Webpage === 'sign_out')
	{
		return(
			<nav className="nav_bar">
				<p className='pointer f4 link black w-5' onClick={()=>PageChange('register')}> Register</p>
				<p className='pointer f4 link black w-10' onClick={()=>PageChange('sign_in')}> Sign In</p>
			</nav>
		)
	} else if (Webpage === 'sign_in') {
		return(
			<nav className="nav_bar">
			 	<p className='pointer f4 link black pr4' onClick={()=>PageChange('sign_out')}>Sign Out</p>
			</nav>
		)
	} else {
		return(
			<nav className="nav_bar">
			 	<p className='pointer f4 link black pr4' onClick={()=>PageChange('sign_out')}>Sign In</p>
			</nav>
		)
	}

	
}

export default Navigation;