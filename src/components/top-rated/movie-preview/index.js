import Styles from './styles.scss';
import React, { PureComponent } from 'react';


export class MoviePreview extends PureComponent {
    render () {
        const { movie: { title, overview, vote_average: rate, poster_path: image, release_date: date }} = this.props;

        return (
            <div className = { Styles.item }>
                <div className = { Styles.item_container }>
                    <img height = { '92px' } src = { `http://image.tmdb.org/t/p/w92${image}` } width = { '92px' } />


                    <div className = { Styles.item_header }>
                        <span className = { Styles.item_title }>{title}</span>

                        <span className = { Styles.item_rate }>
                            <strong>Rate : </strong>{rate}
                        </span>
                        <span className = { Styles.item_date }>
                            <strong>Release Date : </strong>{date.replace(/-/g, '/')}
                        </span>
                    </div>


                </div>
                <span className = { Styles.item_description }>
                    {overview.length ? overview : 'No description yet'}
                </span>

            </div>
        );
    }
}
