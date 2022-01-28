import React from "react";
import "./Home.css";
import videoSource from "../../assets/books.mp4";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <>
      <div className="Container">
        <video autoPlay="autoplay" loop="loop" muted className="Video">
          <source src={videoSource} type="video/mp4"  style={{ objectFit: "cover" }}/>
          Your browser does not support the video tag.
        </video>
        <div className="Content">
          <div className="SubContent">
            <h1>Book Management</h1>
            <p>Manage your Books with Ease</p>
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: "whitesmoke" }}
            >
              <Link
                to="/register"
                style={{ color: "crimson", textDecoration: "none" }}
              >
                Get started
              </Link>
            </Button>
            <img
              src="https://assets.entrepreneur.com/content/3x2/2000/20150827211532-reading-book-in-office-books-read.jpeg?crop=4:3"
              alt="profile"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="about">
          <h4>ABOUT BOOK-KEEPING FUNCTIONALITIES :</h4>
          <ul>
            <li>Register User</li>
            <li>Update User</li>
            <li>Login</li>
            <li>User Dashboard</li>
            <li>Create Book</li>
            <li>Update Book</li>
            <li>Delete Book</li>
          </ul>
        </div>
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            ©Bookkeeping Application | made with <span style={{ color: "red" , fontSize:"30px"}}>♥</span> by S.KARTHICK RAJA
          </p>
        </div>
      </footer>
    </>
  );
};

export { Home };
