import React, { useState, useEffect } from 'react';
import './BoardgamesPage.css';
import PageHeader from '../../components/Header/Header';
import BoardgameList from '../../components/BoardgameList/BoardgameList';

export default function BoardgamesPage({ user, handleLogout, bgData }){

    const [boardgames, setBoardGames] = useState(bgData)    

    return (
        <>
            <PageHeader user={user} handleLogout={handleLogout} />
            <h1>The Board Game Compendium</h1>
            <BoardgameList boardgames={boardgames} />
        </>
    )
}