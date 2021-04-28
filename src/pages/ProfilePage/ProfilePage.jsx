import React from 'react';
import { Image } from 'semantic-ui-react';
import PageHeader from '../../components/Header/Header';
import BoardgameList from '../../components/BoardgameList/BoardgameList';
import * as favoritesApi from '../../utils/userService';

export default function ProfilePage({ user, bgData }){

    // console.log('this is user info', user)

    const style = {
        color: 'white'
    }

    return (
        <>
        <PageHeader user={user}/>
        <Image src={user.photoUrl} size='medium' circular floated='right'/>
        <h1>{user.username}'s Profile</h1>
        <h4 style={style}>Email: {user.email}</h4>
        <h4 style={style}>About me: {user.bio}</h4>
        <h2 style={style}>My Favorite Games:</h2> 
        <p style={style}>{
            user.favorites.length === 0 ? 'You have no games added to your Favorites yet' : 'Favorites will appear here'
        }</p>
        {/* <BoardgameList bgData={bgData}/> */}
        </>
    )
}