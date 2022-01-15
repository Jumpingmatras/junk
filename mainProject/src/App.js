import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Outlet, Route, Routes} from 'react-router-dom';
import IndexPage from "./components/IndexPage/IndexPage";
import AboutPage from "./components/AboutPage/AboutPage";
import UsersPage from "./components/UsersPage/UsersPage";
import UserPage from "./components/UserPage/UserPage";
import DiplomaPage from "./components/DiplomaPage/DiplomaPage";
import LoginPage from "./components/LoginPage/LoginPage";
import BasketPage from "./components/BasketPage/BasketPage";
import MarketPage from "./components/MarketPage/MarketPage";
import React, { useState, useEffect, useRef } from 'react';

function App() {

  return (
      <div>
      <Routes>
          <Route path={'/'} element={<Layout/>}>
            <Route index element={<IndexPage/>}/>
            <Route path={'market'} element={<MarketPage/>}/>
            <Route path={'basket'} element={<BasketPage/>}/>
            <Route path={'login'} element={<LoginPage/>}/>
            <Route path={'about'} element={<AboutPage/>}/>
            <Route path={'user'} element={<UsersLayout/>}>
                <Route index element={<UsersPage/>}/>
                <Route path={':userId'} element={<UserPage/>}/>
            </Route>
          </Route>
      </Routes>
      </div>
  );
}

function UsersLayout() {
    return (
        <div>
            <h2>Пользователи</h2>
            <Outlet/>
        </div>
    )
}

function Layout() {
    return (
        <div className="App">
          <Header/>
          <main className={'content'}>
              <Outlet/>
          </main>
          <Footer/>
        </div>
    )
}

export default App;