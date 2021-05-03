import React from 'react';
import './MissingPage.css';
import { Image } from 'semantic-ui-react';
import PageHeader from '../../components/Header/Header';

export default function MissingPage({ user }){
    return (
        <>
        <PageHeader user={user}/>
        <h1>This is page is still under construction!</h1>
        <Image src='https://pbs.twimg.com/media/Ena7jVuWMAAHS6R.jpg:large' size='large' className='orc'/>
        </>
    )

}
