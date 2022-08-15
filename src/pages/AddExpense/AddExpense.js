import React from "react";
import AddFrom from "../../components/AddFrom/AddFrom";
import SubHeader from "../../components/SubHeader/SubHeader";
import "./AddExpense.css";

const AddExpense = () => {
  return (
    <div className="addexpense-container">
      <SubHeader />
      <AddFrom />
    </div>
  );
};

export default AddExpense;
