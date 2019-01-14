import React from 'react';
//import $ from 'jquery';

export const Navig = () => {

    return (
        // <div className="nav">
        //             <a className="nav__link nav__link--active" href="#" onClick={changeLink}>Inwestycja</a>
        //             <a className="nav__link" href="#">Dostępność</a>
        //             <a className="nav__link" href="#">Rzuty mieszkań</a>
        //             <a className="nav__link" href="#">Kontakt</a>
        // </div>
        <div>
            <nav className="navbar navbar-expand-md">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-angle-down"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Inwestycja <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Dostępność</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Rzuty mieszkań</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Kontakt</a>
                        </li>
                    </ul>

                </div>
            </nav>
            </div>
            );
    };