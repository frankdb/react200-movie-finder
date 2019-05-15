import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMovie } from '../actions/searchActions'

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props.getMovie(this.props.match.params.id)
  }

  render() {
    console.log('props', this.props.movie)
    // console.log('props title', this.props.movie.Title

    return (
      <div className="container">
        <h1 className="text-center">Movie Detail Container</h1>

        <p className="font-weight-bold">Go Back</p>
        <div className="row" style={{ margin: '20px' }}>
          <div className="col-4">
            <img src={typeof this.props.movie.data === "undefined" ? null : this.props.movie.data["Poster"] === "N/A" ? './placeholder.jpg' : this.props.movie.data["Poster"]} style={{ width: '275px' }} />
          </div>
          <div className="col-1">
          </div>
          <div className="col-7">
            <div className="card">
              <h5 className="card-header">Movie Details</h5>
              <div className="card-body">
                <h5 class="card-title">
                  {typeof this.props.movie.data === "undefined" ? null : this.props.movie.data["Title"]}
                </h5>
                <span className="badge badge-success" style={{ margin: '5px' }}>{typeof this.props.movie.data === "undefined" ? null : "Released " + this.props.movie.data["Year"]}</span>

                <span className="badge badge-success" style={{ margin: '5px' }}>{typeof this.props.movie.data === "undefined" ? null : this.props.movie.data["Runtime"]}</span>

                <span className="badge badge-success" style={{ margin: '5px' }}>{typeof this.props.movie.data === "undefined" ? null : this.props.movie.data["Genre"]}</span>

                <p className="card-text">{typeof this.props.movie.data === "undefined" ? null : this.props.movie.data["Plot"]}</p>

                <p className="card-text">{typeof this.props.movie.data === "undefined" ? null : this.props.movie.data["Awards"]}</p>

                <p className="card-text">{typeof this.props.movie.data === "undefined" ? null : "Metascore: " + this.props.movie.data["Metascore"]}</p>

                <p className="card-text">{typeof this.props.movie.data === "undefined" ? null : "IMDB: " + this.props.movie.data["imdbRating"]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MovieDetailContainer.propTypes = {
  getMovie: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    movie: state.searchReducer.movie
  }
}

export default connect(mapStateToProps, { getMovie })(MovieDetailContainer)