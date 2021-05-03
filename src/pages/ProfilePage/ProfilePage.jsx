import React from 'react';
import './ProfilePage.css';
import { Grid, Image } from 'semantic-ui-react';
import PageHeader from '../../components/Header/Header';
import BoardgameList from '../../components/BoardgameList/BoardgameList';

export default function ProfilePage({ user, userFavorites, handleFavorite }){

    // console.log('this is user info', user)

    const white = {
        color: 'white'
    }

    return (
        <>
        <PageHeader user={user}/>
        <Grid>
            <Grid.Row>
                <Grid.Column width={3} className='user-column'>
                    <Image src={user.photoUrl} size='medium' circular className='profile-pic'/>
                    <div className='user-info'>
                        <h1 style={white}>{user.username}'s Profile</h1>
                        <h4 style={white}>Email: {user.email}</h4>
                        <h4 style={white}>About me: {user.bio}</h4>
                    </div>
                </Grid.Column>

                <Grid.Column width={13}>
                    <h2 className='favorite-header'>My Favorite Games:</h2> 
                    <BoardgameList userFavorites={userFavorites} isProfile={true} handleFavorite={handleFavorite}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </>
    )
}