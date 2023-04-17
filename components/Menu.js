import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function Menu() {
	return (
		<Navbar variant="light" expand="lg" className='text-center'>
			<Container className='justify-content-center'>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto">
						<Nav.Link href="#home">Rólunk</Nav.Link>
						<Nav.Link href="#link">Helyszín, dátum</Nav.Link>
						<Nav.Link href="#link2">Menetrend</Nav.Link>
						<Nav.Link href="#link3">Jelezz vissza</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
