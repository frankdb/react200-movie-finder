import React from 'react';
import { getMovies } from '../actions/searchActions'
import { connect } from 'react-redux';
import store from '../index.jsx'

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedTerm: null
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchedTerm: e.target.value })
  }

  render() {
    console.log(this.props.movie)
    return (
      <div>
        <h1 className="text-center">Movie Search Container</h1>
        <div class="form-group">
          <input type="text" className="form-control" id="search" placeholder="Enter movie" value={this.state.searchedTerm} onChange={this.handleChange} />
          <button type="submit" className="btn btn-primary" style={{ marginTop: '5px' }} onClick={() => this.props.getMovies(this.state.searchedTerm)}>Submit</button>
        </div>
      </div >
    )
  }
}

const mapStateToProps = state => {
  return {
    movie: state.searchResults
  }
}

export default connect(mapStateToProps, { getMovies })(MovieSearchContainer)