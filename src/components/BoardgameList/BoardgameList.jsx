import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import GamePage from '../../pages/GamePage/GamePage';
import BoardgameCard from '../BoardgameCard/BoardgameCard';

export default function BoardgameList({ boardgames }){

    // console.log('TEST IN BG-LIST', boardgames)
    
    return (
        <Card.Group itemsPerRow={4} stackable>
            {boardgames.map(boardgame => {
                return (
                    <BoardgameCard
                        name={boardgame.name}
                        image={boardgame.image_url}
                        description={boardgame.description_preview}
                        minPlayers={boardgame.min_players}
                        maxPlayers={boardgame.max_players}
                        minPlaytime={boardgame.min_playtime}
                        maxPlaytime={boardgame.max_playtime}
                        minAge={boardgame.min_age}
                        publishers={boardgame.primary_publisher.name}
                        release={boardgame.year_published}
                        rating={boardgame.average_user_rating}
                        id={boardgame.id}
                    />
                )
            })}
        </Card.Group>
    )
    
}