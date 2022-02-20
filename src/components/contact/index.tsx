import React from 'react'
import '../../styles/contact.scss'
interface Props{

}

export const Contact:React.FC<Props> = () => {
    return (
        <div id="content">
           <h3>My socials:</h3>
            <span>Instagram: @eosmvn</span><br />
            <span>e-mail: micue_arte@gmail.com</span>
        </div>
    )
}