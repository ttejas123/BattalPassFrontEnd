import React from 'react'
import './header.css'

const Same = (props) => {
	return (
		<>
		 <div className='headerStyle' style={{fontSize: props.size, textShadow: props.shadow, justifyContent: props.justify}}> {props.text} </div>
		</>
	)
}

export default Same;