import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';

const Layout = props => {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
      {props.children}    
  </div>
      <Footer />
    </div>
  );
};

export default Layout;