import React from 'react'
import '../../styles/paintingItem.scss'; 


interface Props{
    imgLink: string,
    caption: string
}

export const PaintingItem:React.FC<Props> = (props) => {
    return (
        <div className="painting">
            <img src={props.imgLink} alt={props.caption} />
            <span className="painting--subtitle">{props.caption}</span>
        </div>
    )
}
