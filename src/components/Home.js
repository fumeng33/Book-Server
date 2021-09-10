import axios from "axios";
import React, { useState, useEffect } from "react";
import Banner from "./Banner";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/books`)
      .then((response) => setBooks(response.data));
  }, []);

  return (
    <div className="home">
      <Banner
        image="https://res.cloudinary.com/dwuibrt2k/image/upload/v1630384436/book-piles_hoswqy.jpg"
        sub="Let's Create Your Book Library!"
      />
    </div>
  );
};

export default Home;
