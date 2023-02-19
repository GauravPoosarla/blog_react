import React from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import data from './assets/mockData/index.json';

function App() {
  const clapArray = new Array(data.length).fill(0);
  const [claps, setClaps] = React.useState(clapArray);
  const [indexClapped, setIndexClapped] = React.useState(-1);

  const clapHandler = (index) => {
    if(indexClapped === -1) return;

    if (claps[indexClapped]) {
      setClaps(claps.map((clap, i) => (i === index ? clap - 1 : clap)));
    } else {
      setClaps(claps.map((clap, i) => (i === index ? clap + 1 : clap)));
    }
    setIndexClapped(claps[indexClapped] ? -1 : index);
  };

  return (
    <div>
      <Header />
      <Body>
      {data.data.map((item,i) =>  <Card data={item} funcClap={clapHandler} index={i}/>)}
      </Body> 
      <Footer />
    </div>
  );
}

export default App;
