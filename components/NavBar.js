import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'
import checkUser from '../pages/checkUser'
import { Auth } from 'aws-amplify'
import creatPost from '../pages/creat-post'
const NavBar = () => {
    const user = checkUser()
    return (
        <>
        <Navbar>
        <Container>
            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
            <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href='/login'>Login</Nav.Link>
            </Nav.Item>
            { user && <Nav.Link href="/creat-post">Create Post</Nav.Link> }
            <Navbar.Collapse className="justify-content-end">
            <Nav.Item>
            { user && <Nav.Link onClick={()=> Auth.SignOut()}>Sign Out</Nav.Link>}
            </Nav.Item>
            <Navbar.Text>
                Signed in as: <Nav.Link href="/login">{  user && user.attributes.email}</Nav.Link>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
      
    
      </>
    )
}

export default NavBar
