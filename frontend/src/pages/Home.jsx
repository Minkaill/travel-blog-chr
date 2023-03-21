import React from "react";
import MainHeader from "../components/MainHeader";
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <div className={`${styles.main}`}>
      <MainHeader />
    </div>
  );
};

export default Home;
