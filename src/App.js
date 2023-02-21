import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Card from './components/Card';
import { useState, useEffect } from 'react';
import { GET_BLOG_DATA } from './constants/apiEndPoint';
import makeRequest from './utils/makeRequest';

function App() {
  const [blogData, setBlogData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    makeRequest(GET_BLOG_DATA())
    .then((response) => {
      setBlogData(response);
    })
    .catch((error) => {
      setError(error);
    });
  }, []);

  console.log(blogData);

  return blogData ? (
    <div>
      <Header />
      <Body>
      {blogData.map((item) =>  
      <Card 
        key={item.id} 
        item={item}
      />)}
      </Body> 
      <Footer />
    </div>
  ): (
    <p>Loading</p>
  );
}

export default App;