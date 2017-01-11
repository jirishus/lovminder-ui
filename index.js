import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/Hero/hero.jsx';
import Header from './components/Header/header.jsx';

ReactDOM.render(<Hero secret="some random thing" />, document.getElementById('smsForm'));
ReactDOM.render(<Header />, document.getElementById('topHeader'));
