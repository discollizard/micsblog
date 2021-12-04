import React from 'react'
import {PaintingItem} from '../paintingItem/'
import '../../styles/paintings.scss'; 
interface Props{

}

const paintingsData = [
    {link:'marc.jfif', caption:'Marc'},
    {link:'arrow.jfif', caption:'Arrow'},
    {link:'mom.jfif', caption:'Mom'},
    {link:'pig.jfif', caption:'Pig'},
]

export const Paintings:React.FC<Props> = () => {
    return (
        <div>
            <h3>Paintings</h3>
            <div className="paintingGrid">
                {paintingsData.map(x => {
                    return <PaintingItem
                        key={x.link}
                        imgLink={"/img/"+x.link}
                        caption={x.caption}
                    />
                })}
            </div>
        </div>
    )
}
