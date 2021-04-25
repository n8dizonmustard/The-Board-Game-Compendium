import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header';
import BoardgameCard from '../../components/BoardgameCard/BoardgameCard';

export default function BoardgamesPage({ user, handleLogout, bgData }){

    const [boardgames, setBoardGames] = useState(bgData)

    console.log('this is the boardgames state from Boardgames.jsx', boardgames)
    

    
    return (
        <>
            <PageHeader user={user} handleLogout={handleLogout} />
            <h1>The Board Game Compendium</h1>
            <p>The BoardgamesList Component will render here</p>
        </>
    )
}