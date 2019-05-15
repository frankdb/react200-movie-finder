import React from 'react';
import { getMovies } from '../actions/searchActions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedTerm: null,
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
    console.log(this.props.movie)

    var results = this.props.movie.movies.map(movie => {
      return (
        <div className="card" style={{ margin: '20px' }}>
          <h5 className="card-header">{movie["Title"]}</h5>
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <img src={movie["Poster"] === "N/A" ? './placeholder.jpg' : movie["Poster"]} style={{ width: '175px' }} />
              </div>
              <div className="col-8">
                <p className="card-text font-weight-bold">{movie["Year"]}</p>
                <p className="card-text">{movie["Plot"]}</p>
                <a href="#" className="btn btn-primary">More information</a>
              </div>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div>
        <h1 className="text-center">Movie Finder</h1>
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