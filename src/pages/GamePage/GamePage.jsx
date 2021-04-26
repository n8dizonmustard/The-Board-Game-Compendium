import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/Header/Header';
import { Image } from 'semantic-ui-react';


export default function GamePage({ user, handleLogout, routerProps, bgData }){

    let gameID = routerProps.match.params.id
    let matchingGame = bgData.filter(game => game.id === gameID)
    let name = matchingGame[0].name
    let image = matchingGame[0].image_url

    return (
        <>
        <PageHeader user={user} handleLogout={handleLogout} />
        <h1>Boardgame: {name}</h1>
        <Image src={image} size='medium'/>
        </>
    )
}