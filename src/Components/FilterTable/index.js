export default function ({setFilter}){
    return(
        <div className="row">
            <div className="col">
                <div ClassName="title-filter">
                    <h2>Filtro</h2>
                </div>

                <button className="checkbtn">
                    All
                </button>
                <button className="checkbtn">
                    Cadeira
                </button>
                <button className="checkbtn">
                    Mesa
                </button>
                <button className="checkbtn">
                    Computador
                </button>
                <button className="checkbtn">
                    Teclado
                </button>
            </div>
        </div>
    )
}