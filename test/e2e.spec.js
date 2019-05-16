/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

import { getMovies, getMovie } from '../src/js/actions/searchActions';
import { searchReducer } from '../src/js/reducers/searchReducer';

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';


describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should have the correct page title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('h1').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Movie Finder');
      })
  );

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
});

describe('actions', () => {

  it('should return a dispatch function for getMovies', (done) => {
    const movie = getMovies('Terminator')
    expect(movie).to.be.a('function');
    done();
  })

  it('should return a dispatch function for getMovie', (done) => {
    const movie = getMovie('Terminator')
    expect(movie).to.be.a('function');
    done();
  })

});