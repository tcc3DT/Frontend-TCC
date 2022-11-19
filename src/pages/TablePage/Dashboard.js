import './Styles/dashboard.css'
import PageTitle from './Typograpy/PageTitle'
import Tables from './Tables/Table';
import Header from '../../Components/Header';
import Title from '../../Components/TitlePage';


export default function Dashboard() {
    return (
        <>
        <Header />
            <main className='main'>
                <Title title="Tabela de Patrimônio"/>
                <div className='container-dashboard'>
                    <PageTitle></PageTitle>
                </div>
                <Tables/>
            </main>
        </>
    )
}