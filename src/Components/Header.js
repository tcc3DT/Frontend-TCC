import '../Styles/header.css'
import { MagnifyingGlass } from "phosphor-react";

export function Header() {
    return (
        <header className="header">
            <div className='container'>
                <div className='pesquisa'>
                    <div className='relative'>
                        <div className='absolute'>
                            <MagnifyingGlass size={20} color="#2b29a8" weight="light" className='icon-pequisa' />
                        </div>
                        <input
                            className='input'
                            type="text"
                            placeholder="Pesquise aqui"
                            aria-label="Search" 
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}