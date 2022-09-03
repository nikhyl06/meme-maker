import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Nav';
import Main from './components/Main';

function App(){
  return(
    <div>
      <Nav />
      <Main />
    </div>
    
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))