import React from 'react';
import "./MainModulos.css";
import logoJava from "../../../assets/image/logo-verde-ctv.png"

const MainModulos: React.FC = () => {
    return (
        <main>

            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light verde">Seção De Módulos</h1>
                        <p className="lead text-body- verde">Esses são todos os módulos que temos disponíveis, caso tenha interesse em nos ajudar, você pode entrar em contato conosco.</p>
                        <p className='btn-directory'>
                            <a href="#" className="btn btn-success my-2">Entrar em contato</a>
                            <a href="#" className="btn btn-secondary my-2">Fazer uma doação</a>
                        </p>
                    </div>
                </div>
            </section>

            <div className="album py-5 bg-body-tertiary">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="card1-img" width="100%" height="225">
                                    <image href={logoJava} width="100%" height="100%" />
                                </svg>
                                <div className="card-body">
                                    <p className="card-text">Módulo onde é feito os exercicíos passados pelo professor de java da unicesumar!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-success">View</button>
                                        </div>
                                        <small className="text-body-secondary">? mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: ?" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">?</text></svg>
                                <div className="card-body">
                                    <p className="card-text">Módulo onde é feito os desafios passados pelo professor moreno em C++!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-success">View</button>
                                        </div>
                                        <small className="text-body-secondary">? mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: ?" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">?</text></svg>
                                <div className="card-body">
                                    <p className="card-text">Módulo onde é feito algumas explicações de front-end!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-success">View</button>
                                        </div>
                                        <small className="text-body-secondary">? mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: ?" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">?</text></svg>
                                <div className="card-body">
                                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure hic corporis suscipit sit, laborum ipsum commodi tempora nemo!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-success">View</button>
                                        </div>
                                        <small className="text-body-secondary">? mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: ?" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">?</text></svg>
                                <div className="card-body">
                                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure hic corporis suscipit sit, laborum ipsum commodi tempora nemo!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-success">View</button>
                                        </div>
                                        <small className="text-body-secondary">? mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: ?" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">?</text></svg>
                                <div className="card-body">
                                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure hic corporis suscipit sit, laborum ipsum commodi tempora nemo!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-success">View</button>
                                        </div>
                                        <small className="text-body-secondary">? mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: ?" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">?</text></svg>
                                <div className="card-body">
                                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure hic corporis suscipit sit, laborum ipsum commodi tempora nemo!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-success">View</button>
                                        </div>
                                        <small className="text-body-secondary">? mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: ?" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">?</text></svg>
                                <div className="card-body">
                                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure hic corporis suscipit sit, laborum ipsum commodi tempora nemo!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-success">View</button>
                                        </div>
                                        <small className="text-body-secondary">? mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: ?" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">?</text></svg>
                                <div className="card-body">
                                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure hic corporis suscipit sit, laborum ipsum commodi tempora nemo!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-success">View</button>
                                        </div>
                                        <small className="text-body-secondary">? mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default MainModulos