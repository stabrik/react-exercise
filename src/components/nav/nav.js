import React from 'react'

export const Navig = () => {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Inwestycja</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Dostępność</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Rzuty mieszkań</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Kontakt</a>
                </li>
            </ul>
        </div>
    );
};