import React from 'react';
import './BoardgamesPage.css';
import PageHeader from '../../components/Header/Header';
import BoardgameList from '../../components/BoardgameList/BoardgameList';

export default function BoardgamesPage({ user, handleLogout, bgData }){

    // console.log('TEST IN BG PAGE', bgData)

    return (
        <>
            <PageHeader user={user} handleLogout={handleLogout} />
            <h1>The Board Game Compendium</h1>
            <BoardgameList bgData={bgData} />
        </>
    )
}