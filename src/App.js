import React from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import data from './assets/mockData/index.json';

function App() {
  const clapArray = new Array(data.length).fill(0);
  const clapClickedArray = new Array(data.length).fill(false);

  data.data.forEach((item, index) => {
    clapArray[index] = item.claps;
  });

  const [claps, setClaps] = React.useState(clapArray);
  const [clapClicked, setClapClicked] = React.useState(clapClickedArray);

  const clapHandler = (index) => {
    if(!clapClicked[index]) {
      const newClaps = [...claps];
      const newClapClicked = [...clapClicked];
      newClaps[index] = newClaps[index] + 1;
      newClapClicked[index] = true;
      setClaps(newClaps);
      setClapClicked(newClapClicked);
    }
    else {
      const newClaps = [...claps];
      const newClapClicked = [...clapClicked];
      newClaps[index] = newClaps[index] - 1;
      newClapClicked[index] = false;
      setClaps(newClaps);
      setClapClicked(newClapClicked);
    }
  };
  
  return (
    <div>
      <Header />
      <Body>
      {data.data.map((item,i) =>  <Card data={item} claps={claps} clapHandler={clapHandler} index={i}/>)}
      </Body> 
      <Footer />
    </div>
  );
}

export default App;