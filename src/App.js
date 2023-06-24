import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';
import NFTs from "./components/NFTs";


const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/*<Route path="/exchanges" element={<Exchanges />} />*/}
            <Route path="/nfts" element={<NFTs />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
             Cryptaria Inc.
          </Link> <br />
          All rights may or may not be reserved, buy cryptocurrencies, but don't cry later.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          {/*<Link to="/exchanges">Exchanges</Link>*/}
          <Link to="/nfts">NFTs</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
