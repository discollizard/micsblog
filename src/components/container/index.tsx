import React from 'react';
import '../../styles/container.scss';

interface Props {
    
}

export const Container:React.FC<Props> = ({children}) =>{
    return(
        <div className="wholeScreen">
            <div className="mainContent">
                {children}
            </div>
        </div>
    );
}