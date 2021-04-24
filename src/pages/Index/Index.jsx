import React from 'react';
import PageHeader from '../../components/Header/Header';

export default function Index({ user, handleLogout }){
    return (
        <>
            <PageHeader user={user} handleLogout={handleLogout} />
            <h1>The Board Game Compendium</h1>
        </>
    )
}