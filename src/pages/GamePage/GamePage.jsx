import React from 'react';
import './GamePage.css';
import PageHeader from '../../components/Header/Header';
import { Grid, Image, Icon } from 'semantic-ui-react';
import Filter from '../../components/Filter/Filter';


export default function GamePage({ user, handleLogout, routerProps, bgData }){

    let gameID = routerProps.match.params.id
    let matchingGame = bgData.filter(game => game.id === gameID)

    // console.log('TEST', matchingGame)

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

    return (
        <>
        <PageHeader user={user} handleLogout={handleLogout} />
        <h1>Boardgame: {name}</h1>

        <Grid columns={6} className='game-specs'>
            <Grid.Row>

                <Grid.Column>
                    <Icon id='icon' name='users' size='huge'/>
                        <p className='text'>Players: {
                            minPlayers === maxPlayers ? 'Unknown' : `${minPlayers}-${maxPlayers}`
                        }</p>
                </Grid.Column>


                <Grid.Column>
                    <Icon id='icon' name='clock' size='huge'/>
                    <p className='text'>Play Time: {
                        minPlaytime === null ? 'Unknown' :
                        ( minPlaytime === maxPlaytime ? `${minPlaytime} minutes` : `${minPlaytime}-${maxPlaytime} minutes`)
                    }</p>
                </Grid.Column>

                <Grid.Column>
                    <Icon id='icon' name='universal access' size='huge' />
                    <p className='text'>Minimum Age: {
                        minAge === null ? 'Unknown' : minAge
                    }</p>
                </Grid.Column>

                <Grid.Column>
                    <Icon id='icon' name='building' size='huge' />
                    <p className='text'>Published by {publishers}</p>
                </Grid.Column>

                    <Grid.Column>
                        <Icon id='icon' name='checked calendar' size='huge' />
                        <p className='text'>Release Year: {
                            release === null ? 'Unknown' : `${release}`
                        }</p>
                    </Grid.Column>

                    <Grid.Column>
                        <Icon id='icon' name='star' size='huge' />
                        <p className='text'>Average Rating: {
                            Math.ceil(rating) === 0 ? 'No Ratings' : `${Math.ceil(rating)}/5`
                        }</p>
                    </Grid.Column>

            </Grid.Row>
        </Grid>


        <Grid columns={2}>
            <Grid.Row>
                <Grid.Column>
                    <Image src={image} size='large' centered/>
                </Grid.Column>


                <Grid.Column>
                    <p className='description'>{description}</p>
                </Grid.Column>

            </Grid.Row>
        </Grid>
        </>
    )
}