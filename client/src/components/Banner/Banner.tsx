import React, { FC } from 'react';
import './Banner.sass';

const Bravery = require('../../images/Bravery.png');

const Banner: FC = () => {
    
    return (
        <div className='banner'>
            <img src={Bravery} alt="Bravery" />
            <h1>TO BE UKRAINE</h1>
        </div>
    )
}

export default Banner;