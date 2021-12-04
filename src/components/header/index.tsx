import React from 'react';
import '../../styles/header.scss';

interface Props {
    title: string,
    caption: string
}

export const Header:React.FC<Props> = (props) => {
    return (
        <header>
            <h1>Mic's {props.title}</h1>
            <span>{props.caption}</span>
        </header>
    );
}