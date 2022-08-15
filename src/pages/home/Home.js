import React from "react";
import ExpenseList from "../../components/ExpenseList/ExpenseList";
import SubHeader from "../../components/SubHeader/SubHeader";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <SubHeader />
      <div className="">
        <ExpenseList />
      </div>
    </div>
  );
};
export default Home;
