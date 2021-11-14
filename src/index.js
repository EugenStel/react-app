import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserPage, MainPage, NotFoundPage} from './components/Pages'
import SearchUserPage from './components/Pages/SearchUserPage'
import './index.css'
import {Counter} from './playground/hooks/counter'
import {YearsAndEggs} from './playground/hooks/YearsAndEggs'

import {TestWoggler} from '../src/playground/hooks/useEffect'



// ReactDOM.render(
//   <YearsAndEggs/>
//   , document.getElementById('root'))


// ReactDOM.render(

//   <Router>
//     <Routes>
//       <Route path="/" element={<MainPage/>}/>
//       <Route path="/search" element={<SearchUserPage/>}/>
//       <Route path="/user/:userId" element={<UserPage/>}/>
//       <Route path="*" element={<NotFoundPage/>}/>
//     </Routes>
// какой компонент будет отбраж всегда, если указан за пределами роутс
//   </Router>
//   ,
//   document.getElementById('root')
// );



// useEffect()
ReactDOM.render(
  <TestWoggler />
  ,
  document.getElementById('root')
);