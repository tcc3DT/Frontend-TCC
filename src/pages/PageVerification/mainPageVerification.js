import React from 'react';
import '../PageVerification/StylesVerification/mainPageVerifications.css'

import Header from '../../Components/Header';
import TableVerification from './TableVerification';
import Title from '../../Components/TitlePage';


export default function mainPageVerification() {
    return (
        <>
        <Header />
            <Title title="Verificação de Usuários"/>
            <div className='mainPageVerifications'>
                <TableVerification />
            </div>
        </>
    )
}