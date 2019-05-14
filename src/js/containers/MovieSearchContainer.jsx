import React from 'react';
import { getMovies } from '../actions/searchActions'
import { connect } from 'react-redux';
import store from '../index.jsx'
import SearchResult from '../components/SearchResult';
import PropTypes from 'prop-types';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedTerm: null,
      movies: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ searchedTerm: e.target.value })
  }

  handleClick() {
    this.props.getMovies(this.state.searchedTerm)
  }

  render() {
    console.log('props', this.props.movie)
    console.log('props inner', this.props.movie.movies)

    var results = this.props.movie.movies.map(flick => {
      return (
        <h3>{flick["Title"]}</h3>
      )
    });

    return (
      <div>
        <h1 className="text-center">Movie Search Container</h1>
        <div class="form-group">
          <input type="text" className="form-control" id="search" placeholder="Enter movie" value={this.state.searchedTerm} onChange={this.handleChange} />
          <button type="submit" className="btn btn-primary" style={{ marginTop: '5px' }} onClick={this.handleClick}>Submit</button>
        </div>

        {results}
      </div >
    )
  }
}

MovieSearchContainer.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movie: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    movie: state.searchReducer
  }
}

export default connect(mapStateToProps, { getMovies })(MovieSearchContainer)