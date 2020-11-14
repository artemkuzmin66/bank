import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';

import './App.scss';
import Card from './components/card/Card';
import CountProfitContainer from './components/countProfit/CountProfitContainer';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Mobile from './components/mobileApp/MobileApp';
import Question from './components/question/Question';
import Rate from './components/rate/Rate';
import Score from './components/score/Score';
import Stock from './components/stock/Stock';
import HeaderNav from './components/headerNav/HeaderNav';

function App() {
  return (
    <div className="app">
      <HeaderNav />
      <Header />
      <Stock />
      <Rate />
      <CountProfitContainer />
      <Score />
      <Card />
      <Question />
      <Mobile />
      <Footer />
    </div>
  );
}

const MainApp = (props) => {
  return <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
}


export default MainApp;
