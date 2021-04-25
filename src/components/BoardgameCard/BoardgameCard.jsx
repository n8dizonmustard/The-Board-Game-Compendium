import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

export default function BoardgameCard({ bgData }){



    return (
        <Card>
            <Image src='' wrapped ui={false} />
            <Card.Content>
            <Card.Header>Board Game Title</Card.Header>
            <Card.Meta>
                <span className='release'>Release Year: 2021</span>
            </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Card.Description>
                    This is a description of the game.
                </Card.Description>
            </Card.Content>
        </Card>
    )
}