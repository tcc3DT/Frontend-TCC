import '../Styles/dashboard.css'
import InfoCard from './Cards/InfoCard'
import PageTitle from './Typograpy/PageTitle'
import { MagnifyingGlass, Table } from "phosphor-react";
import Tables from './Tables/Table';


export function Dashboard() {
    return (
        <main className='main'>
            <div className='container'>
                <PageTitle></PageTitle>
            </div>

             <Tables/ >

        </main>
    )
}