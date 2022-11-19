import React from 'react';
import '../PageUser/StylesUsers/mainPage.css'

import Header from '../../Components/Header';
import TableUser from './TableUser';
import Title from '../../Components/TitlePage';


export default function mainPageUsers() {
    return (
        <>
        <Header />
            <Title title="Gerenciamento de Usuários"/>
            <div className='mainPage'>
                <TableUser />
            </div>
        </>
    )
}