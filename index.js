import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app.jsx';
import Hero from './components/Hero/hero.jsx';
import Header from './components/Header/header.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Hero secret="some random thing" />, document.getElementById('smsForm'));
ReactDOM.render(<Header />, document.getElementById('topHeader'));
