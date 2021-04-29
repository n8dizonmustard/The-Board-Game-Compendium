import React from 'react';
import './BoardgamesPage.css';
import PageHeader from '../../components/Header/Header';
import BoardgameList from '../../components/BoardgameList/BoardgameList';

export default function BoardgamesPage({ user, handleLogout, bgData, atlasApiUrl, handleFavorite }){

    // console.log('TEST IN BG PAGE', user)

    return (
        <>
            <PageHeader user={user} handleLogout={handleLogout} />
            <h1>The Board Game Compendium</h1>
            <BoardgameList bgData={bgData} atlasApiUrl={atlasApiUrl} handleFavorite={handleFavorite} user={user} />
        </>
    )
}