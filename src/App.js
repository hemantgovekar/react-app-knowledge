import React from 'react';
import Footer from './component/footer'
import Content from './component/content'
import './App.css'
import Header from './component/header';


function App() {
  return (
    <div>

      <Header name="Search Git Users" ></Header >
      <Content />
      <Footer environment={process.env.REACT_APP_BASE_URL} />
    </div>
  );
}

export default App;
