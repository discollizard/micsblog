import React from 'react';
import '../../styles/navbar.scss'; 
import  { Link } from 'react-router-dom';

interface Props {
    paintingsAlias: string
}

export const Navbar:React.FC<Props> = (props) => {
    return (
        <nav>
            <div className="wrapper">
                <Link to="/">Home</Link>
                <Link to="/paintings">{props.paintingsAlias}</Link>
                <Link to="/about">About me</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}