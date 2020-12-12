import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Card from './Components/Card';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Card frontSide="Difference between “ == “ and “ === “ operators" backSide="Both are comparison operators. The difference between both the operators is that,“==” is used to compare values whereas, “ === “ is used to compare both value and types."/>
    <Card frontSide="Difference between “ == “ and “ === “ operators" backSide="Both are comparison operators. The difference between both the operators is that,“==” is used to compare values whereas, “ === “ is used to compare both value and types."/>
    <Card frontSide="Difference between “ == “ and “ === “ operators" backSide="Both are comparison operators. The difference between both the operators is that,“==” is used to compare values whereas, “ === “ is used to compare both value and types."/>
  </React.StrictMode>,
  document.getElementById('root')
);

