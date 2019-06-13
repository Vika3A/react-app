import React from 'react';
import Styles from './styles.scss';

const Home = () => (
    <div className = { Styles.container }>
        <h1>Choose  category in header to start!</h1>
        <img className = { Styles.img } src = 'https://cdn.vox-cdn.com/thumbor/WhBtiSXd3B_c9zlrjW08KU-7_OU=/0x0:2300x1499/1200x800/filters:focal(966x566:1334x934)/cdn.vox-cdn.com/uploads/chorus_image/image/57988089/Movies_end_of_year_2017.0.jpg' />
    </div>
);

export default Home;
