import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'

export default function Hero({data}) {
	console.log(data)
	if(data.hero_onoff) return (
		<header className='hero mt-5'>
			<Container>
				<div className="shadow bg-white p-lg-4 p-3 position-relative">
					<Image src={data.hero_img.url} height={data.hero_img.height} width={data.hero_img.width} alt="" className='img-fluid' />
				</div>
			</Container>
			<Container className='large'>
				<div className="bg">
					<div className="d-flex align-items-center justify-content-center py-5 py-lg-8">
						<h1 className='fs-large fst-italic fw-bold d-block p-3 py-lg-4 px-lg-5 bg-white'>{data.hero_title}</h1>
					</div>
				</div>
			</Container>
		</header>
	)
}
