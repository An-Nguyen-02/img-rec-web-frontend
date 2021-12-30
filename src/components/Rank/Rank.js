import React from 'react';

const Rank = ({name, rank}) => {
	return(
		<div>
			<div  className='white f3'>
				{`${name}, your entry count is...`}
			</div>
			<div className='white f1'>
				<p> {`# ${rank}`} </p>
			</div>
		</div>

	)
}

export default Rank;