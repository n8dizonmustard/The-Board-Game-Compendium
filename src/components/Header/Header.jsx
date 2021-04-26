import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import { Header, Segment, Image, Icon } from 'semantic-ui-react';


export default function PageHeader({user, handleLogout}){

    const headerFont = {
        color: '#ffffff'
    }

    const headerColor={
        backgroundColor: '#0000cc'
    }

    return (
        <Segment clearing style={headerColor}>
            <Header as='h2' floated='right'>
                <Link to="/"><Icon name="home" style={headerFont}></Icon></Link>
                <Link to='' onClick={handleLogout} style={headerFont}>Logout</Link>
            </Header>
            <Header as='h2' floated='left'>
                <Link to={`/${user.username}`}><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image></Link>          
            </Header>
        </Segment>
    )
}