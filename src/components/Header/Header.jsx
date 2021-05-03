import React from 'react';
import './Header.css';
import {Link, withRouter} from 'react-router-dom';
import { Header, Segment, Image, Icon } from 'semantic-ui-react';


export default function PageHeader({user, handleLogout}){

    const headerFont = {
        color: '#ffffff',
        fontSize: '50px',
        fontFamily: 'Oleo Script Swash Caps, cursive'
    }

    const headerColor={
        backgroundColor: 'maroon',
        height: '175px'
    } 

    return (
        <Segment clearing style={headerColor}>
            <Header as='h2' floated='right'>
                <Link to='/boardgames'><Icon name='home' className='link'></Icon></Link>
                <Link to='/login' onClick={handleLogout} className='link'>Logout</Link>
            </Header>
            <Header as='h2' floated='left'>
                <Link to={`/${user.username}`} className='link'><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image>{user.username}</Link>          
            </Header>
            <Header as='h1' textAlign='center' style={headerFont}>The Board Game Compendium</Header>

            <div className='filter-container'>
                <Link to='/missing-page' className='filter-item'>Adventure</Link>
                <Link to='/missing-page' className='filter-item'>Cooperative</Link>
                <Link to='/missing-page' className='filter-item'>Family Games</Link>
                <Link to='/missing-page' className='filter-item'>Fantasy</Link>
                <Link to='/missing-page' className='filter-item'>Historic</Link>
                <Link to='/missing-page' className='filter-item'>Horror</Link>
                <Link to='/missing-page' className='filter-item'>Mature</Link>
                <Link to='/missing-page' className='filter-item'>Party Games</Link>
                <Link to='/missing-page' className='filter-item' id='last'>Party Games</Link>
            </div>
        </Segment>
    )
}