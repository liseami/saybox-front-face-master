import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import '../src/index.css';
import HomeView from './Views/HomeView';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NoPage from './Views/NoPage';
import AboutUs from './Views/AboutUs';
import MainView from './Views/MainView';
import PrivacyAgreement from './Views/UserFiles/PrivacyAgreement';
import UserAgreement from './Views/UserFiles/UserAgreement';
import WeixinQrcodePage from './Views/ContentUS/WeixinQrcodePage';
import QQPage from './Views/ContentUS/QQPage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainView />}>
          <Route index element={<HomeView />} />
          <Route path="*" element={<NoPage />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path="PrivacyAgreement" element={<PrivacyAgreement />} />
          <Route path="UserAgreement" element={<UserAgreement />} />
          <Route path='WeixinQrcodePage' element={<WeixinQrcodePage />} />
          <Route path='QQPage' element={<QQPage />} />
        </Route>
      </Routes>
    </HashRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
