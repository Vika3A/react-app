import React, { Component } from 'react';
import { getTopMovieList } from '../../services/api/movie/top-rated';
import MoviePreview from './movie-preview/index';
import Styles from './styles.scss';

export default class TopRated extends Component {


    constructor (props) {
        super(props);

        this.state = {
            movies:      [],
            currentPage: 1,
            totalPages:  null,
        };
    }

    componentDidMount () {
        this.setValues();
    }

    componentDidUpdate (prevProps, prevState) {

        const { currentPage } = this.state;

        if (currentPage !== prevState.currentPage) {
            this.setValues();
        }


    }


    setValues () {
        const { currentPage } = this.state;


        getTopMovieList(currentPage).then(({ results: movies, total_pages: totalPages, page: currentPage }) => {
            this.setState(() => ({
                movies,
                totalPages,
                currentPage,
            }));

        });
    }


    _handlePrevPageButtonClick = () => {
        this.setState(({ currentPage, totalPages }) => ({
            currentPage: (currentPage !== 1) ? currentPage - 1 : totalPages,
        }));
    };

    _handleNextPageButtonClick = () => {
        this.setState(({ currentPage, totalPages }) => ({
            currentPage: (currentPage + 1 <= totalPages) ? currentPage + 1 : 1,
        }));
    };

    render () {
        const { movies, totalPages, currentPage } = this.state;


        const moviesList = movies.map(
            (movie, index) => <MoviePreview key = { index } movie = { movie } />
        );

        const navElement = (<nav className = { Styles.nav }>
            <div className = { Styles.nav_left }>
                <button className = { Styles.nav_button } onClick = { this._handlePrevPageButtonClick }>  Previous page</button>
                <button className = { Styles.nav_button } onClick = { this._handleNextPageButtonClick }>Next page</button>
            </div>

            {totalPages ? <div className = { Styles.nav_page }>
                <span>{currentPage}</span>/ {totalPages}</div>
                : ''}
        </nav>);

        return (
            <section className = { Styles.container }>
                {navElement}
                <div className = { Styles.top_rated }>
                    {moviesList}
                </div>
            </section>
        );
    }

}
