import React from 'react';
import { Image } from 'semantic-ui-react';
import PageHeader from '../../components/Header/Header';
import BoardgameList from '../../components/BoardgameList/BoardgameList';

export default function ProfilePage({ user, userFavorites, handleFavorite }){

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
        <BoardgameList userFavorites={userFavorites} isProfile={true} handleFavorite={handleFavorite}/>
        </>
    )
}