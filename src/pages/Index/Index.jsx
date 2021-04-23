import React from 'react';
import PageHeader from '../../components/Header/Header';

export default function Index({ user }){
    return (
        <>
            <PageHeader user={user} />
            <h1>The Board Game Compendium</h1>
        </>
    )
}