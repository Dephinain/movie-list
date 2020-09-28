import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchMovies from "./searchMovies";
import * as serviceWorker from './serviceWorker';

class Main extends React.Component {
  render() {
    return(
    <div className="container">
      <h1 className="title">Movie Search Component</h1>
      <SearchMovies/>
    </div>);
  }
}
ReactDOM.render(<Main/>, document.getElementById('root'));
