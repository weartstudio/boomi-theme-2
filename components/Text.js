import React from 'react'
import { Container } from 'react-bootstrap'

export default function Text({data}) {
	if(data.text_onoff) return (
		<div className='text my-5 my-lg-8'>
			<Container className='text-center'>
				<h3 className='fs-base fw-bold mb-4 fw-semibold'>{data.text_title}</h3>
				<div className='fst-italic fs-base c-light fw-light' dangerouslySetInnerHTML={{__html: data.text_content}}></div>
			</Container>
		</div>
	)
}
