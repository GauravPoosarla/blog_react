import React from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import data from './assets/mockData/index.json';

function App() {
  const clapArray = new Array(data.length).fill(0);
  data.data.forEach((item, index) => {
    clapArray[index] = item.claps;
  });

  const [claps, setClaps] = React.useState(clapArray);

  const clapHandler = (index) => {
    const newClaps = [...claps];
    newClaps[index] = newClaps[index] + 1;
    setClaps(newClaps);
  };
  
  return (
    <div>
      <Header />
      <Body>
      {data.data.map((item,i) =>  <Card data={item} claps={claps} funcClap={clapHandler} index={i}/>)}
      </Body> 
      <Footer />
    </div>
  );
}

export default App;