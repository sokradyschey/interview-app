import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Card from './Components/Card';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Card frontSide="Difference between “ == “ and “ === “ operators" backSide="Both are comparison operators. The difference between both the operators is that,“==” is used to compare values whereas, “ === “ is used to compare both value and types."/>
    <Card frontSide="Explain “this” keyword." backSide="The “this” keyword refers to the object that the function is a property of."/>
    <Card frontSide="Explain call()" backSide="This method invokes a method (function) by specifying the owner object."/>
  </React.StrictMode>,
  document.getElementById('root')
);

