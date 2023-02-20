import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Card from './components/Card';
import data from './assets/mockData/index.json';

function App() {
  // const clapArray = new Array(data.length).fill(0);
  // const clapClickedArray = new Array(data.length).fill(false);

  // data.data.forEach((item, index) => {
  //   clapArray[index] = item.claps;
  // });

  // const [claps, setClaps] = React.useState(clapArray);
  // const [like, setLike] = React.useState([...clapClickedArray]);
  // const [clapClicked, setClapClicked] = React.useState([...clapClickedArray]);

  // const clapHandler = (index) => {
  //   if(!clapClicked[index]) {
  //     const newClaps = [...claps];
  //     const newClapClicked = [...clapClicked];
  //     newClaps[index] = newClaps[index] + 1;
  //     newClapClicked[index] = true;
  //     setClaps(newClaps);
  //     setClapClicked(newClapClicked);
  //   }
  //   else {
  //     const newClaps = [...claps];
  //     const newClapClicked = [...clapClicked];
  //     newClaps[index] = newClaps[index] - 1;
  //     newClapClicked[index] = false;
  //     setClaps(newClaps);
  //     setClapClicked(newClapClicked);
  //   }
  // };

  // const likeHandler = (index) => {
  //   if(!like[index]) {
  //     const newLike = [...like];
  //     newLike[index] = true;
  //     setLike(newLike);
  //   }
  //   else {
  //     const newLike = [...like];
  //     newLike[index] = false;
  //     setLike(newLike);
  //   }
  // };
  
  return (
    <div>
      <Header />
      <Body>
      {data.data.map((item,index) =>  
      <Card 
        key={index} 
        date={item.date}
        readingTime={item.readingTime}
        title={item.title}
        description={item.description}
        claps={item.claps}
        liked={item.liked}
        image={item.image}
      />)}
      </Body> 
      <Footer />
    </div>
  );
}

export default App;