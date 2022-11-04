import './StylesTable/dashboard.css'
import Tables from './Tables/Table';
import Header from '../../Components/Header';


export default function () {
    return (
        <>
            <Header />
            <main className="mainVerification">
                <Tables/>
            </main>
        </>
    )
}