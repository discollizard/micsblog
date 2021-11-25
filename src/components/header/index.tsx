import React from 'react';
import '../../styles/header.scss';

interface Props {
    title: string,
    caption: string
}

export const Header:React.FC<Props> = (mamaco) => {
    return (
        <header>
            <h1>Mic's {mamaco.title}</h1>
            <span>{mamaco.caption}</span>
        </header>
    );
}