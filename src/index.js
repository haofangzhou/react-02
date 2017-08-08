import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
//ReactDOM.render 的作用 是将<h1>Hello, world!</h1> 插入到 document.getElementById('root2')
//只不过<h1>Hello, world!</h1> 虽然是再js文件中，却可以使用HTML语法 （这就是JSX语法）

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root2')
);