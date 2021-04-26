import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

export default function BoardgameCard({ name, image, description, minPlayers, maxPlayers, minPlaytime, maxPlaytime, minAge, publishers, release, rating }){


    return (
        <Card>
            <Card.Header>{name}</Card.Header>
            <Image.Group size='small'>
                <Image src={image} wrapped ui={false} />
            </Image.Group>
            <Card.Content>
            <Card.Meta>
                <p>Players: {minPlayers}-{maxPlayers}</p>
                <p>Min. Age: {minAge}</p>
                <p>Rating: {rating ? 'No Rating' : `${Math.ceil(rating)}/5`}</p>
                <p className='release'>Release Year: {release}</p>
                <p>Published by: {publishers}</p>
            </Card.Meta>
            </Card.Content>
        </Card>
    )
}