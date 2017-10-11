import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies } from '../actions';
import Movie from './Movie';

class MoviesList extends Component {
	componentDidMount() {
		this.props.getMovies();
	}

	return() {
		return (
			<ul>
				{this.props.movies.map((movie, i) => {
					return (
						<Movie key={i} index={i} movie={movie} />
					);
				})}
			</ul>
		);
	}
}

export default MoviesList;