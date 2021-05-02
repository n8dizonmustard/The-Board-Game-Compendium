import React from 'react';
import './BoardgamesPage.css';
import PageHeader from '../../components/Header/Header';
import BoardgameList from '../../components/BoardgameList/BoardgameList';
import Filter from '../../components/Filter/Filter';

export default function BoardgamesPage({ user, handleLogout, bgData, atlasApiUrl, handleFavorite, userFavorites, isProfile }){

    // console.log('TYPE TEST IN BG PAGE', typeof(userFavorites))

    return (
        <>
            <PageHeader user={user} handleLogout={handleLogout} />
            <h1>The Board Game Compendium</h1>
            <Filter />
            <BoardgameList
                bgData={bgData}
                atlasApiUrl={atlasApiUrl}
                handleFavorite={handleFavorite}
                user={user}
                userFavorites={userFavorites}
                isProfile={false}
            />
        </>
    )
}