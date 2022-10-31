import './Styles/dashboard.css'
import PageTitle from './Typograpy/PageTitle'
import Tables from './Tables/Table';
import Header from '../../Components/Header';


export default function Dashboard() {
    return (
        <>
            
            <Header />
            <Tables />
            {/* <main className='main'>
                <div className='container-dashboard'>
                    <PageTitle></PageTitle>
                </div>
            </main> */}
        </>
    )
}