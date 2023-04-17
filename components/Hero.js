import React from 'react'
import { Container } from 'react-bootstrap'

export default function Hero({data}) {
	if(data.hero_onoff) return (
		<header>
			<Container></Container>
			<Container className='large'>
			</Container>
			<h1>{data.hero_title}</h1>
		</header>
	)
}
