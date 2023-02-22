import React from "react";
import Header from "../../components/Header";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import { useState, useEffect } from "react";
import { GET_BLOG_DATA } from "../../constants/apiEndPoint";
import { makeRequest } from "../../utils/makeRequest";

export default function Home() {
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

  if (error) {
    return <p>{error.message}</p>;
  }

  return blogData.length !== 0 ? (
    <div>
      <Header />
      <Body>
        {blogData.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </Body>
      <Footer />
    </div>
  ) : (
    <p>Loading</p>
  );
}
