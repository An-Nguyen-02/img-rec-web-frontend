import React from 'react';
import './Input.css'

const Input = ({searchChange, buttonClick}) => {
	return(
		<div>
			<p className="f3"> This Magic Brain will detect a Face from your picture </p>
			<div className="center">
				<div className='form center pa4 br3 shadow-5'>
					<input type="text" className="f4 pa2 w-70 center" onChange={searchChange}/>
					<button type="button" 
							className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer"
							onClick={buttonClick}>
					Detect</button>
				</div>
			</div>
		</div>
	)
}

export default Input;