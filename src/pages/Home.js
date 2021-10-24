import React from "react";
// import Chat from "../components/Chat";
import pomilogo from "../assets/pomilogo.png";
import w_pomi_txt from "../assets/w_pomi_txt.png";
import book from "../assets/book.png";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.col}>
        <img src={pomilogo} alt="logo" className={styles.logo} />
        <img src={w_pomi_txt} alt="Pomi" className={styles.logotext} />

        <Link to="/chat">
          <div className={styles.button}>Start a Chat</div>
        </Link>
        <img src={book} alt="Research book" className={styles.bookicon} />
      </div>
      <div className={styles.col}>
        <iframe
          src="https://www.youtube.com/embed/E7wJTI-1dvQ"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
      </div>
    </div>
  );
};

export default Home;
