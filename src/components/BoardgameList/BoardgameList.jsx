// import { RDS } from 'aws-sdk';
// import { set } from 'mongoose';
import { Card, Image } from 'semantic-ui-react';
import React, {useState, useEffect} from 'react';
import BoardgameCard from '../BoardgameCard/BoardgameCard';

export default function BoardgameList({ atlasApiUrl, bgData, handleFavorite, user }){

    const [boardgames, setBoardgames] = useState([])

    useEffect(() => {
        if(bgData === undefined || boardgames.length === 0){
            fetch(atlasApiUrl)
            .then((res) => res.json())
            .then((data) => {
                setBoardgames(data.games)
            })
        }
    }, [])

    let cards = boardgames.map(boardgame => {
        return (
                <BoardgameCard
                    name={boardgame.name}
                    image={boardgame.image_url}
                    id={boardgame.id}
                    key={`${boardgame.name}`}
                    handleFavorite={handleFavorite}
                    user={user}
                />
        )
    })

    const loading = () => {
        return (
            <>
            <h2>LOADING</h2>
            <Image src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7460333d-1507-49ee-b8cf-c28ce950002d/d7fne1u-4ad4d8da-ef4a-44ff-a11b-c194da3ff5bf.jpg/v1/fill/w_800,h_933,q_75,strp/orc_work_by_anhel1310_d7fne1u-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MzMiLCJwYXRoIjoiXC9mXC83NDYwMzMzZC0xNTA3LTQ5ZWUtYjhjZi1jMjhjZTk1MDAwMmRcL2Q3Zm5lMXUtNGFkNGQ4ZGEtZWY0YS00NGZmLWExMWItYzE5NGRhM2ZmNWJmLmpwZyIsIndpZHRoIjoiPD04MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.3a-F3yNp_5XtKqISmrTTYmkxnD6kp74gBiWvQDAScY8' />
            </>
        )
    }

    // console.log(cards, 'THESE ARE THE CARDS')

    return(
        <>
        {boardgames ?
        <Card.Group itemsPerRow={4} stackable>
            {cards}
        </Card.Group>
        : loading }
        </>
    )


}