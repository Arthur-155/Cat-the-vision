import React from 'react';
import './headermodulos.css';
import logoCtv from "../../../assets/image/logo-verde-ctv.png"

const HeaderModulos: React.FC = () => {
    return (
        <header>
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-md-between py-3 mb-4 border-bottom">
                    <div className="col-md-3 mb-2 mb-md-0">
                       <img src={logoCtv} alt="" className='logoCtv'/>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-success">Home</a></li>
                        <li><a href="#" className="nav-link px-2 link-success">Módulos</a></li>
                        <li><a href="#" className="nav-link px-2 link-success">Sobre Nós</a></li>
                        <li><a href="#" className="nav-link px-2 link-success">Contato</a></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <button type="button" className="btn btn-outline-success me-2">Login</button>
                        <button type="button" className="btn btn-success">Sign-up</button>
                    </div>
                </header>
            </div>
        </header>

    );

}

export default HeaderModulos