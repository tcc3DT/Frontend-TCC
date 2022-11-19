import * as React from "react";
import Verifications from "../Verifications";
import '../StylesVerification/tableVerification.css'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import ModalVerification from "../../../Components/modalVerification";

export default function TableVerification(){
    const [data, setData] = React.useState(Verifications);

    return(
        <>
            <div className="containerVerificationUp">
            <div className="tableVerificationContainer">

            <div className="subContainerVerification">
                <table className="tableVerification">
                <thead className="theadVerification">
                    <tr>
                    <td>Email</td>
                    <td>Data</td>
                    <td></td>
                    </tr>
                </thead>

                {data.map((values) => {
                    const { email, date } = values;
                    return (
                    <tbody>
                        <tr>
                        <td >
                            <div>
                            <div>
                                <p id="id-object">{email}</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <span>{date}</span>
                        </td>
                        <td >
                            <div>
                                <button >
                                    <ModalVerification />
                                </button>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                    );
                })}
                </table>
            </div>

            {/* <div className="tableUsersFooter">
                <div className="paginationUsers">
                <span>mostrando 1 - 10 de 45</span>
                <nav>
                    <ul>
                    <li className="arrowsUsers">
                        <FaChevronLeft size={20} />
                    </li>
                    <li className="numberSelectedUsers">1</li>
                    <li className="numberUsers">2</li>
                    <li className="numberUsers">3</li>
                    <li className="numberUsers">4</li>
                    <li className="numberUsers">5</li>
                    <li className="arrowsUsers">
                        <FaChevronRight size={20} />
                    </li>
                    </ul>
                </nav>
                </div>
            </div> */}
            </div>
            </div>
        </>
    )
}