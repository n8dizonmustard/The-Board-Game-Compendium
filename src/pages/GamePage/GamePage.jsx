import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/Header/Header';
import { Image } from 'semantic-ui-react';


export default function GamePage({ user, handleLogout, routerProps, bgData }){

    let gameID = routerProps.match.params.id
    let matchingGame = bgData.filter(game => game.id === gameID)
    let name = matchingGame[0].name
    let image = matchingGame[0].image_url
    let description = matchingGame[0].description_preview
    let minPlayers = matchingGame[0].min_players
    let maxPlayers = matchingGame[0].max_players
    let minPlaytime = matchingGame[0].min_playtime
    let maxPlaytime = matchingGame[0].max_playtime
    let minAge = matchingGame[0].min_age
    let publishers = matchingGame[0].primary_publisher.name
    let release = matchingGame[0].year_published
    let rating = matchingGame[0].average_user_rating

    console.log('MIN AGE', minAge)

    return (
        <>
        <PageHeader user={user} handleLogout={handleLogout} />
        <h1>Boardgame: {name}</h1>
        <Image src={image} size='medium'/>
        <p>{description}</p>
        <p>Players: {
            minPlayers === maxPlayers ? 'Unknown' : `${minPlayers}-${maxPlayers}`
        }</p>
        <p>Play Time: {
            minPlaytime === null ? 'Unknown' :
            ( minPlaytime === maxPlaytime ? `${minPlaytime} minutes` : `${minPlaytime}-${maxPlaytime} minutes`)
        }</p>
        <p>Minimum Age: {
            minAge === null ? 'Unknown' : minAge
        }</p>
        <p>Published by {publishers}</p>
        <p>Release Year: {
            release === null ? 'Unknown' : `${release}`
        }</p>
        <p>Average Rating: {
            Math.ceil(rating) === 0 ? 'No Ratings' : `${Math.ceil(rating)}/5`
        }</p>
        </>
    )
}