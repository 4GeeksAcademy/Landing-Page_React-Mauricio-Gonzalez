import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";






const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="row">
          <div className="col-md-4">
            <Card imageUrl="https://via.placeholder.com/150" title="Card 1" description="This is a description for card 1." buttonUrl="#" buttonLabel="Go somewhere"/>
          </div>
          <div className="col-md-4">
            <Card
              imageUrl="https://via.placeholder.com/150"
              title="Card 2"
              description="This is a description for card 2."
              buttonUrl="#"
              buttonLabel="Go somewhere"
            />
          </div>
          <div className="col-md-4">
            <Card
              imageUrl="https://via.placeholder.com/150"
              title="Card 3"
              description="This is a description for card 3."
              buttonUrl="#"
              buttonLabel="Go somewhere"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
