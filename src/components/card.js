import React from 'react'
import './card.css'
import HEADER from './header.js'

const Same = (argument) => {
	return (
		<>
		 <div className='H-divM'>
		 	<div className='H-div1 w-100 pt-4'>
		 		<div>
		 			<HEADER justify="center" text="Current Prize Pool" size="20px" shadow="4px 0 0 #000, -4px 0 0 #000, 0 4px 0 #000, 0 -4px 0 #000, 4px 4px #000, -3px -3px 0 #000, 4px -3px 0 #000, -3px 4px 0 #000" />
		 			<div className="textNew">the poll will increase for every transaction made</div>
		 		</div>
		 	</div>
		 	
		 	<div className='H-div2 d-flex justify-content-center pt-2'>
		 		<div className='unite'>100,000</div>
		 		<div className='uniteN'>UNIT</div>
		 	</div>
		 </div>
		</>
	)
}

export default Same;