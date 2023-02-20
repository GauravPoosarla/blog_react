import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Card from './components/Card';
import data from './assets/mockData/index.json';

function App() {
  return (
    <div>
      <Header />
      <Body>
      {data.data.map((item,index) =>  
      <Card 
        key={index} 
        {...item}
      />)}
      </Body> 
      <Footer />
    </div>
  );
}

export default App;