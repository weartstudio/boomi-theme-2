import React, { useEffect, useState } from 'react'
import { useCountdown } from '@/helpers/timer'
import { Container, Row, Col } from 'react-bootstrap';

export default function Countdown({data}) {

	const [targetDate,setTargetDate] = useState(new Date());
	const [days, hours, minutes, seconds] = useCountdown(targetDate);


	useEffect(()=>{
		const countd = new Date(data?.date_date);
		setTargetDate(countd)
		console.log(countd)
	},[])

	if(data.date_onoff) return (
		<div className='date text-center'>
			<Container className='small my-5'>
			<h3 className="fs-base fw-semibold mb-5">{data.date_title}</h3>
				<Row md="4" xs="2" className="justify-content-center fs-base fw-bold">
					<Col><div className="bg"><span className='lh-1'>{days}<br />nap</span></div></Col>
					<Col><div className="bg"><span className='lh-1'>{hours}<br />óra</span></div></Col>
					<Col><div className="bg"><span className='lh-1'>{minutes}<br />perc</span></div></Col>
					<Col><div className="bg"><span className='lh-1'>{seconds}<br />mp</span></div></Col>
				</Row>
			</Container>
		</div>
	)
}
